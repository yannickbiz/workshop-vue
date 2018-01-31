<template>
    <div id="app">
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/twdb">Two Way Data Binding</router-link>
                </li>
                <li>
                    <router-link to="/users">Users</router-link>
                </li>
                <li>
                    <router-link to="/fetch">Fetching Data</router-link>
                </li>
            </ul>
        </nav>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 8px;
}

nav {
    border-bottom: 1px solid #333;
    ul {
        list-style-type: none;
        padding-left: 0;
        display: flex;
    }

    li + li {
        margin-left: 16px;
    }

    a {
        text-decoration: none;
        color: #282828;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.6;
        }
    }
}

.users {
    list-style-type: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 20px;
}
</style>
