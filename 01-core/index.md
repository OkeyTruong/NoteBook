# **INTRODUCTION**

![Untitled](https://www.internetingishard.com/html-and-css/introduction/becoming-a-web-developer-0530f1.png)

Có thể là phần giới thiệu duy nhất về HTML và CSS mà bạn sẽ cần. Nếu bạn nỗ lực đọc mọi phần và viết mọi đoạn mã, hướng dẫn này có tiềm năng thay thế các khóa học trực tuyến và đào tạo trực tiếp trị giá hàng trăm hoặc thậm chí hàng nghìn đô la.

Mục tiêu của chúng tôi là giúp những người mới bắt đầu hoàn chỉnh trở thành nhà phát triển web chuyên nghiệp trở nên dễ dàng nhất có thể, vì vậy nếu bạn chưa bao giờ viết một dòng HTML hoặc CSS, nhưng bạn đang dự tính thay đổi nghề nghiệp, hãy uống một tách cà phê, ngồi vào chỗ và chúng ta hãy bắt đầu làm việc. 🧑🏻‍💻

# Html, CSS và JavaScript

HyperText Markup Language (HTML), Cascading Style Sheets (CSS) và JavaScript là các ngôn ngữ web. Chúng có liên quan rất chặt chẽ với nhau, nhưng chúng cũng được thiết kế cho các nhiệm vụ rất cụ thể. Hiểu cách chúng tương tác sẽ giúp bạn trở thành nhà phát triển web một cách lâu dài.

- HTML dùng **để xây dựng** và **cấu trúc lại** các thành phần có trong Website.
- CSS là một ngôn ngữ được sử dụng để **tìm và định dạng** lại các phần tử được tạo ra bởi ngôn ngữ đánh dấu (HTML).
- ***JavaScript***  được sử dụng để tạo **các yếu tố tương tác phản ứng** trên các trang web, **nâng cao trải nghiệm người dùng**.

![Untitled](https://www.internetingishard.com/html-and-css/introduction/html-css-javascript-905348.png)

Ví dụ: bạn có thể đánh dấu một số đoạn văn bản cụ thể là một đoạn văn bằng HTML này:

```html
<p id='some-paragraph'>This is a paragraph.</p>
```

Sau đó, bạn có thể đặt kích thước và màu sắc của đoạn văn đó bằng một số CSS:

```css
p {
  font-size: 20px;
  color: blue;
}
```

Và JS sẽ giúp bạn nếu muốn trở nên lạ mắt hơn, bạn có thể viết lại đoạn văn đó khi người dùng nhấp vào nó bằng một số JS:

```jsx
var p = document.getElementById('some-paragraph');
p.addEventListener('click', function(event) {
  p.innerHTML = 'You clicked it!';
});
```

⇒ Như bạn có thể thấy: HTML, CSS và JavaScript là những ngôn ngữ hoàn toàn khác nhau, nhưng tất cả chúng đều đề cập đến nhau theo một cách nào đó. Hầu hết các trang web dựa vào cả ba.