body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #subscription-form {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f8f9fa;
  
    input[type="email"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 10px;
    }
  
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
  
      &:hover {
        background-color: #0056b3;
      }
    }
  }
  
  #collection {
    padding: 20px;
    background-color: #fff;
    
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  
    #filters {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
  
      button {
        margin: 0 5px;
        padding: 10px 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
  
        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
  
    .product {
      text-align: center;
  
      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
      }
  
      p {
        margin: 10px 0;
      }
    }
  }
  
  #story {
    display: flex;
    padding: 20px;
    background-color: #f8f9fa;
  
    img {
      max-width: 50%;
      height: auto;
      border-radius: 8px;
    }
  
    .story-content {
      padding-left: 20px;
  
      h2 {
        margin-bottom: 10px;
      }
  
      p {
        margin-bottom: 20px;
      }
  
      button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
  
        &:hover {
          background-color: #0056b3;
        }
     }
    }
  }