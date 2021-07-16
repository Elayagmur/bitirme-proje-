<template>
  <div class="ratingCard">
    <h2>Happy with us?</h2>
    <form method="post">
       <p class="p_class">
          <input id="radio1" type="radio" name="radio_rate" value="5">
            <label for="radio1">&#9786;</label>
          <input id="radio2" type="radio" name="radio_rate" value="4">
            <label for="radio2">&#9786;</label>
          <input id="radio3" type="radio" name="radio_rate" value="3">
            <label for="radio3">&#9786;</label>
          <input id="radio4" type="radio" name="radio_rate" value="2">
            <label for="radio4">&#9786;</label>
          <input id="radio5" type="radio" name="radio_rate" value="1">
            <label for="radio5">&#9786;</label>
      </p>
        <textarea name="rate_comment" class="comment_area" placeholder="Leave your comment here"></textarea><br>
          <input type="submit" name="rating_submit" value="Post!">
    </form>  
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);
.ratingCard{
  padding: 40px;
  width: 270px;
 background: linear-gradient(to left, #FF6347, #FFA500);
  margin: 100px auto 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
   h2{
  font-weight: 100;
  text-align: center;
  font-size: 2.3em;
}
}
input[type="radio"] {
  display: none;
}
label{
  color: grey;
  text-shadow: 1px 1px 1px #c9c9c9;
  font-size: 25px;
}

form p {
  text-align: center;
  font-size: 20px;
}
form input[type="submit"]{
  width: 100%;
  height: 36px;
  display: block;
  position: relative;
  border: 0px;
  color: #fff;
  background-color: #4d90fe;
}
.comment_area{
  width: 100%;
height: 100px;
background: #fff;
display: block;
border: 1px solid #d9d9d9;
border-top: 1px solid #c0c0c0;
box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  margin-bottom: 5px;
  padding: 10px;
}
.p_class{
  direction: rtl;
  unicode-bidi: bidi-override;
}
form input[type="submit"]:hover{
  border: 0px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  background-color: #357ae8;
  cursor: pointer;
}

label:hover, label:hover ~ label {
  color: orange;
  cursor:pointer;
}

input[type="radio"]:checked ~ label {
  color: orange;
}
.comment_area:hover{
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.signature{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
}
</style>