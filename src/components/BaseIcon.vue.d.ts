import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    name: {
        type: PropType<string | number>;
        required: true;
        validator(value: string): boolean;
    };
}, unknown, unknown, {
    iconComponent(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: PropType<string | number>;
        required: true;
        validator(value: string): boolean;
    };
}>>, {}>;
export default _default;
