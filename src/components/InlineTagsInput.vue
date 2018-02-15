<template>
    <tags-input :tags="tags" @update="(tags) => { $emit('update', tags) }">
        <div slot-scope="{ tag, removeTag, inputEventHandlers, inputBindings }" class="tags-input">
            <span class="tags-input-tag" v-for="(tag, index) in tags" :key="index">
                <span>{{ tag }}</span>
                <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
            </span>
            <input type="text" class="tags-input-text" placeholder="Add tag..."
                v-on="inputEventHandlers"
                v-bind="inputBindings"
            >
        </div>
    </tags-input>
</template>

<script>
import TagsInput from '@/components/TagsInput.vue';
export default {
    model: {
        prop: 'tags',
        event: 'update',
    },
    props: ['tags'],
    components: {
        TagsInput,
    },
};
</script>
