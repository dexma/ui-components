import { describe, expect, it } from 'vitest';

import { typography } from '../src/lib';
import { fontFamily } from '../src/lib/utils/theme';

describe('typography export', () => {
    it('Should expose the canonical font stack, Montserrat first', () => {
        expect(typography.fontFamily).toBe(fontFamily);
        expect(typography.fontFamily.startsWith('"Montserrat"')).toBe(true);
    });

    it('Should keep the CJK fallbacks for zh_CN', () => {
        expect(typography.fontFamily).toContain('PingFang SC');
        expect(typography.fontFamily).toContain('Microsoft YaHei');
    });

    it('Should expose the weight tokens', () => {
        expect(typography.fontWeight).toEqual({ light: 300, normal: 400, semiBold: 600, bold: 700 });
    });
});
