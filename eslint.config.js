"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var eslint_plugin_vue_1 = require("eslint-plugin-vue");
var eslint_config_typescript_1 = require("@vue/eslint-config-typescript");
var eslint_plugin_1 = require("@vitest/eslint-plugin");
var skip_formatting_1 = require("@vue/eslint-config-prettier/skip-formatting");
// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup
exports.default = (0, eslint_config_typescript_1.defineConfigWithVueTs)({
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
}, {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
}, eslint_plugin_vue_1.default.configs['flat/essential'], eslint_config_typescript_1.vueTsConfigs.recommended, __assign(__assign({}, eslint_plugin_1.default.configs.recommended), { files: ['src/**/__tests__/*'] }), skip_formatting_1.default);
