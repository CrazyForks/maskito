import {MaskitoOptions} from '@maskito/core';

import {
    DEFAULT_TIME_SEGMENT_MAX_VALUES,
    POSSIBLE_DATE_TIME_SEPARATOR,
} from '../../../constants';
import {validateDateString} from '../../../utils';
import {padTimeSegments, validateTimeString} from '../../../utils/time';
import {DATE_TIME_SEPARATOR} from '../constants';
import {parseDateTimeString} from '../utils';

export function createValidDateTimePreprocessor({
    dateModeTemplate,
    dateSegmentsSeparator,
}: {
    dateModeTemplate: string;
    dateSegmentsSeparator: string;
}): NonNullable<MaskitoOptions['preprocessor']> {
    return ({elementState, data}) => {
        const {value, selection} = elementState;

        if (data === dateSegmentsSeparator) {
            return {
                elementState,
                data: selection[0] === value.length ? data : '',
            };
        }

        if (POSSIBLE_DATE_TIME_SEPARATOR.includes(data)) {
            return {elementState, data: DATE_TIME_SEPARATOR};
        }

        const newCharacters = data.replace(
            new RegExp(`[^\\d\\${dateSegmentsSeparator}]`, 'g'),
            '',
        );

        if (!newCharacters) {
            return {elementState, data: ''};
        }

        const [from, rawTo] = selection;
        let to = rawTo + data.length;
        const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);

        const [dateString, timeString] = parseDateTimeString(
            newPossibleValue,
            dateModeTemplate,
        );
        let validatedValue = '';
        const hasDateTimeSeparator = newPossibleValue.includes(DATE_TIME_SEPARATOR);

        const {validatedDateString, updatedSelection} = validateDateString({
            dateString,
            dateModeTemplate,
            offset: 0,
            selection: [from, to],
        });

        if (dateString && !validatedDateString) {
            return {elementState, data: ''}; // prevent changes
        }

        to = updatedSelection[1];

        validatedValue += validatedDateString;

        const paddedMaxValues = padTimeSegments(DEFAULT_TIME_SEGMENT_MAX_VALUES);

        const {validatedTimeString, updatedTimeSelection} = validateTimeString({
            timeString,
            paddedMaxValues,
            offset: validatedValue.length + DATE_TIME_SEPARATOR.length,
            selection: [from, to],
        });

        if (timeString && !validatedTimeString) {
            return {elementState, data: ''}; // prevent changes
        }

        to = updatedTimeSelection[1];

        validatedValue += hasDateTimeSeparator
            ? DATE_TIME_SEPARATOR + validatedTimeString
            : validatedTimeString;

        const newData = validatedValue.slice(from, to);

        return {
            elementState: {
                selection,
                value:
                    validatedValue.slice(0, from) +
                    newData
                        .split(dateSegmentsSeparator)
                        .map(segment => '0'.repeat(segment.length))
                        .join(dateSegmentsSeparator) +
                    validatedValue.slice(to),
            },
            data: newData,
        };
    };
}