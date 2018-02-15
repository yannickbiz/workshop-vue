<template>
    <div>
        <h1>Sandbox</h1>

        <h4 class="mb-3">Component</h4>
        <tags-input v-model="tags">
            <div slot-scope="{ tag, removeTag, inputEventHandlers, inputBindings }">
                <input type="text" class="tags-input w-full mb-2" placeholder="Add tag..."
                    v-on="inputEventHandlers"
                    v-bind="inputBindings"
                >
                <div>
                    <span class="tags-input-tag inline-flex items-center bg-grey-light text-grey-darkest px-2" v-for="(tag, index) in tags" :key="index">
                        <button type="button" class="tags-input-remove text-grey-dark" @click="removeTag(tag)">&times;</button>
                        <span>{{ tag }}</span>
                    </span>
                </div>
            </div>
        </tags-input>

        <hr>

        <h4 class="mb-3">WrapperComponent</h4>
        <inline-tags-input v-model="tags"></inline-tags-input>
    </div>
</template>

<script>
import TagsInput from '@/components/TagsInput.vue';
import InlineTagsInput from '@/components/InlineTagsInput.vue';

export default {
    components: {
        TagsInput,
        InlineTagsInput,
    },
    data() {
        return {
            tags: ['foo', 'bar', 'baz'],
        };
    },
};
</script>
