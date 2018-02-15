<template>
    <div class="card max-w-sm rounded overflow-hidden shadow-lg text-white">
        <div class="flipper" :class="{ flipped: isOpen }" @click="toggle()">
            <div class="flipper__panel front rounded" style="background-image: url('https://tailwindcss.com/img/card-top.jpg');">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl">{{ user.name }}</div>
                </div>
            </div>
            <div class="flipper__panel back rounded bg-purple text-white">
                <div class="px-6 py-4">
                    <p>
                        <span class="uppercase font-bold"><small>ID:</small></span>
                        <small>{{ user.id }}</small>
                    </p>
                    <p class="mt-1">
                        <span class="uppercase font-bold"><small>email:</small></span>
                        {{ user.email }}
                    </p>
                    <p class="mt-1">
                        <span class="uppercase font-bold"><small>Website:</small></span>
                        {{ user.website }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style lang="scss">
.card {
    position: relative;
    height: 250px;
    perspective: 800px;
}

.flipper {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: transform 500ms;
    transform-style: preserve-3d;
    will-change: transfrom;
    cursor: pointer;

    &.flipped {
        transform: rotateY(180deg);
    }
}

.flipper__panel {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    overflow: hidden;

    &.front {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    &.back {
        transform: rotateY(180deg);
    }
}
</style>
