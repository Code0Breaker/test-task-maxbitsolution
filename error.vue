<template>
    <div class="not-found-container">
        <NuxtLink to="/" class="back-link">Go Back to Home</NuxtLink>
    </div>
</template>

<style scoped>
.not-found-container {
    background-color: #040521;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0;
}

.not-found-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: contain;
    user-select: none;
}

.back-link {
    margin-top: 20px;
    font-size: 18px;
    color: #f8f8f8;
    text-decoration: none;
    border: 2px solid #f8f8f8;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.back-link:hover {
    background-color: #f8f8f8;
    color: #040521;
}
</style>
