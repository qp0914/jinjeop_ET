var html = template.HTML(title, list, `
<div style="color:red;">${feedback}</div>
<form action="/auth/login_process" method="post">
  <p><input type="text" name="email" placeholder="email"></p>
  <p><input type="password" name="pwd" placeholder="password"></p>
  <p>
    <input type="submit" value="login">
  </p>
</form>
</html>