<template>
  <a-upload
    :name="name"
    :before-upload="beforeUpload"
    :accept="accept"
    :show-upload-list="false"
    :disabled="disabled"
    :class="classFile"
  >
    <a-button class="input-info">
      {{ nameFile ? nameFile : "Click to Upload" }}
      <DeleteOutlined
        @click.stop
        v-if="nameFile"
        @click.prevent="removeFile()"
      />
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import { defineComponent, defineProps, ref, reactive, computed } from "vue";
import { DeleteOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export default defineComponent({
  name: "FileInput",
  components: {
    DeleteOutlined,
  },
  props: {
    fileInput: {
      type: [File, Object, String],
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    rule: {
      type: Array,
      default: () => [],
    },
    accept: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "file",
    },
    size: {
      type: Number,
      default: 0.5,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classFile: {
      type: String,
      default: "",
    },
  },
  emits: ["update:fileInput", "update-fileInput"],
  setup(props, { emit }) {
    const imageUrl = ref<string | File | object>();
    const nameFile = computed(() =>
      // @ts-nocheck
      // @ts-ignore
      typeof imageUrl === "object" ? imageUrl.value?.name : ""
    );
    /**
     * removeFile
     */
    const removeFile = () => {
      if (props.disabled) return;
      imageUrl.value = "";
      emit("update:fileInput", "");
    };
    /**
     * check size file
     */
    const beforeUpload = async (file: File) => {
      const isLt = file.size / 1024 / 1024 < props.size;
      if (!isLt) {
        message.error(`Image must smaller than ${props.size}MB!`);
        return;
      }
      imageUrl.value = file;
      return emit("update-fileInput", file);
    };
    return {
      beforeUpload,
      imageUrl,
      nameFile,
      removeFile,
    };
  },
});
</script>
