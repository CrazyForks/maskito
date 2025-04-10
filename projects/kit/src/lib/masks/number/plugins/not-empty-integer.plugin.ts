import type {MaskitoPlugin} from '@maskito/core';
import {maskitoUpdateElement} from '@maskito/core';

import {maskitoEventHandler} from '../../../plugins';
import {escapeRegExp, extractAffixes, noop} from '../../../utils';

/**
 * It pads EMPTY integer part with zero if decimal parts exists.
 * It works on blur event only!
 * @example 1|,23 => Backspace => Blur => 0,23
 */
export function createNotEmptyIntegerPlugin({
    decimalSeparator,
    prefix,
    postfix,
}: {
    decimalSeparator: string;
    prefix: string;
    postfix: string;
}): MaskitoPlugin {
    if (!decimalSeparator) {
        return noop;
    }

    return maskitoEventHandler(
        'blur',
        (element) => {
            const {cleanValue, extractedPostfix, extractedPrefix} = extractAffixes(
                element.value,
                {prefix, postfix},
            );
            const newValue =
                extractedPrefix +
                cleanValue.replace(
                    new RegExp(`^(\\D+)?${escapeRegExp(decimalSeparator)}`),
                    `$10${decimalSeparator}`,
                ) +
                extractedPostfix;

            maskitoUpdateElement(element, newValue);
        },
        {capture: true},
    );
}
