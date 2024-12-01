<template>
    <div class="error-message">
      <h2>Oops! Something went wrong.</h2>
      <p>We couldn't load the product. Please try again later.</p>
    </div>
  </template>

  <style scoped>
  .error-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #f9e6e6;
    color: #e74c3c;
    padding: 20px;
    border-radius: 8px;
  }
  
  .error-message h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }
  
  .error-message p {
    font-size: 16px;
  }
  </style>
  