<template>
  <a-date-picker
    v-model:value="syncDateField"
    class="w-full"
    :placeholder="placeholder"
    :disabled="disableds"
    format="YYYY/MM/DD"
    :disabled-date="disabledDate"
  />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { getDate } from "@/mixins/dayjs";
import dayjs, { Dayjs } from "dayjs";
export default defineComponent({
  name: "DatePickerSmall",
  props: {
    dateField: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showTime: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: "YYYY/MM/DD",
    },
    disableds: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:dateField"],
  setup(props, { emit }) {
    const { getDateObjectByTimestamp, getTimestampByDate } = getDate();
    const syncDateField = computed({
      get: () => {
        if (props.dateField)
          return getDateObjectByTimestamp(props.dateField, props.format);
        else return null;
      },
      set: (value: any) => {
        if (value) return emit("update:dateField", getTimestampByDate(value));
        else return emit("update:dateField", null);
      },
    });

    const disabledDate = (current: Dayjs) => {
      // Can not select days before today and today
      return current && current > dayjs().endOf("day");
    };
    return {
      syncDateField,
      disabledDate,
    };
  },
});
</script>
