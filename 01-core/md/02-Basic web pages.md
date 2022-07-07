# #1: **INTRODUCTION**

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

# #2: **BASIC WEB PAGES**

HTML xác định nội dung của mọi trang web trên Internet. Bằng cách "đánh dấu" nội dung của bạn bằng thẻ HTML, bạn có thể cho các trình duyệt web biết bạn muốn các phần khác nhau của nội dung được hiển thị như thế nào. Tạo một tài liệu HTML với nội dung được đánh dấu đúng cách là bước đầu tiên để phát triển một trang web.

![https://www.internetingishard.com/html-and-css/basic-web-pages/html-markup-0761f7.png](https://www.internetingishard.com/html-and-css/basic-web-pages/html-markup-0761f7.png)

Trong chương này, chúng ta sẽ xây dựng trang web đầu tiên của mình. Nó sẽ trông hơi giống “củ chuối một chút” vì nó sẽ không có bất kỳ CSS nào được đính kèm, nhưng nó sẽ đóng vai trò như một phần giới thiệu kỹ lưỡng về các yếu tố HTML mà các nhà phát triển web làm việc hàng ngày.

# Setup

Hãy bắt đầu bằng cách tạo một dự án mới với VScode được gọi là **basic-web-pages**. Sau đó, tạo một tệp **HTML** mới. Tệp HTML này đại diện cho một trang web duy nhất và đó là nơi chúng ta sẽ đặt tất cả mã cho chương này.

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/web-dev-workflow-1faddb.png)

# **Structure of a web page**

Mã **HTML** được tạo thành từ các ký tự nằm bên trong các dấu ngoặc nhọn <>. Chúng được gọi là các phần tử HTML (HTML elements). Các phần tử này thường được tạo thành từ hai thẻ: thẻ mở và thẻ đóng. (Thẻ đóng có thêm một dấu gạch chéo trong đó ví dụ thẻ </p>). Cũng có các thẻ tự đóng khác ví dụ: `<img />`

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-tags-elements-72813b.png)

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadata goes here -->
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

- `<!DOCTYPE html>`  Khai báo đây là một file có định dạng là **HTML5** để giúp trình duyệt biết bạn đang dùng phiên bản html bao nhiêu.
- Thẻ `<html>` Cấu trúc file html
Bên trong <html> element, chúng ta có thêm hai phần tử được gọi là `<head>` và `<body>` . Phần đầu của trang web chứa tất cả các Metadata của nó, như tiêu đề trang, bất kỳ bảng định kiểu CSS nào và những thứ khác cần thiết để hiển thị trang web, và bạn không nhất thiết muốn người dùng nhìn thấy. Phần lớn đánh dấu HTML sẽ nằm trong phần tử `<body>`, đại diện cho nội dung hiển thị của trang. 
![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-head-body-7c2a73.png)

Lưu ý cú pháp nhận xét HTML trong đoạn trích trên. Bất cứ điều gì bắt đầu bằng <!-và kết thúc bằng-> sẽ bị bỏ qua hoàn toàn bởi trình duyệt. Điều này rất hữu ích để ghi lại mã của bạn và ghi chú cho chính mình.

# Page Titles

Một trong những phần quan trọng nhất của smetadata là tiêu đề trang web của bạn, được xác định bởi **phần tử `<title>`** được đặt tên phù hợp. Các trình duyệt sẽ hiển thị điều này trong tab cho trang của bạn.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interneting Is Easy!</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

Khi bạn tải lại trang trong trình duyệt của mình, bạn vẫn sẽ thấy một trang trống, nhưng bạn cũng sẽ thấy **Interneting Is Easy!** Trong tab Trình duyệt.

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-paragraph-element-842f23.png)

Lưu ý cách tất cả các thẻ HTML trong trang web của chúng tôi được lồng vào nhau một cách gọn gàng. Điều rất quan trọng là đảm bảo rằng không có **các yếu tố chồng chéo.** Ví dụ: phần tử `<title>` được cho là nằm bên trong `<head>`

```html
<!-- (Don't ever do this) -->
<head>
  <title>Interneting Is Easy!</head>
</title>
```

# **Paragraphs**

Phần tử `<p>` đánh dấu tất cả văn bản bên trong nó thành một đoạn riêng biệt. Hãy thử thêm phần tử `<p>` sau vào phần nội dung trang web:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interneting Is Easy!</title>
  </head>
  <body>
    <p>First, we need to learn some basic HTML.</p>
  </body>
</html>
```

Bây giờ bạn sẽ có thể xem một số nội dung trên trang. Một lần nữa, vì đây là nội dung chúng ta muốn hiển thị, nó cần phải đi trong **phần tử `<body>`**, **không phải `<head>`**.

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-paragraph-element-842f23.png)

Cũng lưu ý cách **các phần tử `<p>` và `<title>` được thụt vào hai lần, trong khi `<body>` và `<head>` được thụt vào một lần**. Thụt lề các phần tử lồng nhau như thế này là một phương pháp hay nhất quan trọng giúp HTML của bạn dễ đọc hơn đối với các nhà phát triển khác (hoặc cho chính bạn trong tương lai không xa).

# **Headings**

Headings giống như các tiêu đề, chúng được hiển thị trên trang web. HTML cung cấp sáu cấp độ của các tiêu đề và các yếu tố tương ứng là: `<h1>, <h2>, <h3>, … , <h6>`. Số lượng càng cao, tiêu đề càng ít nổi bật.

```html
<body>
  <h1>Interneting Is Easy!</h1>
  <p>First, we need to learn some basic HTML.</p>
</body>
```

Theo mặc định, các trình duyệt hiển thị các tiêu đề ít quan trọng hơn bằng các phông chữ nhỏ hơn. Ví dụ: hãy bao gồm tiêu đề cấp hai và xem điều gì sẽ xảy ra:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interneting Is Easy!</title>
  </head>
  <body>
    <h1>Interneting Is Easy!</h1>
    <p>First, we need to learn some basic HTML.</p>

    <h2>Headings</h2>
    <p>Headings define the outline of your site. There are six levels of
    headings.</p>
  </body>
</html>
```

Điều này sẽ dẫn đến một trang web trông giống như sau:

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-heading-elements-f7fe6a.png)

Headings là cách chính để bạn đánh dấu các phần khác nhau trong nội dung của mình. Chúng xác định đường viền của trang web của bạn khi cả người dùng và công cụ tìm kiếm nhìn thấy nó.

# **Unordered lists**

Là kiểu hiển thị danh sách mà các mục con của nó sẽ không được sắp xếp theo thứ tự mà chỉ được đánh dấu bằng một ký tự đặc trưng

```html
<h2>Lists</h2>

<p>This is how you make an unordered list:</p>

<ul>
  <li>Add a "ul" element (it stands for unordered list)</li>
  <li>Add each item in its own "li" element</li>
  <li>They don't need to be in any particular order</li>
</ul>
```
![](https://www.internetingishard.com/html-and-css/basic-web-pages/html-unordered-lists-f45526.png)

# O**rdered Lists**

Sử dụng thẻ `<ol>` tạo danh sách có thứ tự và thẻ `<ul>` tạo danh sách không có thứ tự trong HTML, mỗi phần tử trong danh sách là `<li>`, thiết lập kiểu hiện thị danh sách với thuộc tính type của `<ol>` và `<ul>`

- `<ol></ol>` là viết tắt của chữ "**o**rdered **l**ist" có nghĩa là danh sách có thứ tự.
- `<li></li>` viết tắt của chữ "**l**ist **i**tem" có nghĩa là mục của danh sách.

```html
<p>This is what an ordered list looks like:</p>

<ol>
  <li>Notice the new "ol" element wrapping everything</li>
  <li>But, the list item elements are the same</li>
  <li>Also note how the numbers increment on their own</li>
  <li>You should be noticing things is this precise order, because this is
      an ordered list</li>
</ol>
```

Khi bạn tải lại trang trong trình duyệt của mình, bạn sẽ nhận thấy rằng trình duyệt tự động tăng số lượng cho mỗi phần tử `<li>`.

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-ordered-lists-120411.png)

Sự khác biệt giữa **ordered list** và **list item** không đáng kể, nhưng nó thực sự có ý nghĩa đối với trình duyệt web, công cụ tìm kiếm và tất nhiên là cả người đọc. Nó cũng dễ dàng hơn so với việc đánh số từng mục trong danh sách theo cách thủ công.

# E**mphasis (Italic) Elements**

Cho đến nay, chúng tôi chỉ làm việc với "**block-level element**” còn được gọi là “**flow content**”. Và còn có “**inline element**”, các **inline element** có thể ảnh hưởng trực tiếp đến các phần của văn bản.

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/inline-vs-block-elements-44860e.png)

- **Block-level element** là kiểu phần tử html chiếm toàn bộ chiều rộng có thể có và không nằm trên cùng dòng với bất kỳ phần tử nào.VD: `<h1>, <p>, <div>, <hr>`
- **Inline element** là kiểu phần tử html chỉ chiếm đủ chiều rộng cần thiết và có thể nằm trên cùng một dòng với nhau.VD: `<span>, <a>`

Ví dụ: `<p>` là **block-level elements**, trong khi `<em>` là một **inline elements** ảnh hưởng đến một khoảng văn bản bên trong một đoạn văn. Nó là viết tắt của "**Emphasis** " và nó thường được hiển thị dưới dạng văn bản in nghiêng. Hãy thử thêm một phần mới thể hiện văn bản được nhấn mạnh vào trang web mẫu:

```html
<h2>Inline Elements</h2>

<p><em>Sometimes</em>, you need to draw attention to a particular word or
phrase.</p>
```

Phần được bao bọc trong thẻ `<em>` sẽ hiển thị ở dạng nghiêng, như được hiển thị bên dưới. Lưu ý rằng cho ta thấy một phần của dòng đã bị ảnh hưởng như thế nào, đây là đặc điểm của các **inline elements**. Trong chương CSS, chúng ta sẽ khám phá **block-level elements**, và **inline elements**  có thể có tác động đáng kể đến bố cục của trang.

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-emphasis-element-87be03.png)

# S**trong (Bold) Elements**

Nếu bạn muốn nhấn mạnh hơn thẻ `<em>`, bạn có thể sử dụng `<strong>`. Nó là một **inline elements** giống như `<em>` và trông giống như sau:

```html
<p>Other times you need to <strong>strong</strong>ly emphasize the importance
of a word or phrase.</p>
```

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-strong-element-d3135f.png)

Để thu hút sự chú ý hơn nữa trong khoảng văn bản của bạn, bạn có thể lồng một phần tử `<strong>` trong một phần tử `<em>` (hoặc ngược lại). Điều này sẽ cung cấp cho bạn văn bản vừa mạnh mẽ vừa được nhấn mạnh:

```html
<p><em><strong>And sometimes you need to shout!</strong></em></p>
```

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-strong-emphasis-element-5b0eb2.png)

# S**tructure Versus Presentation**

Các phần tử `<b>` và `<i>` lỗi thời là những ví dụ cổ điển về điều này. Chúng từng là viết tắt của “bold” và “italic”, nhưng HTML5 đã cố gắng tạo ra sự tách biệt rõ ràng giữa cấu trúc của tài liệu và bản trình bày của nó. Do đó, `<i>` đã được thay thế bằng `<em>` và tương tự cho `<b>` và `<strong>`.

# E**mpty Html Elements (`<br>,<hr>`,…)**
## 1. `<br>`

```html
<h2>Empty Elements</h2>

<p>Thanks for reading! Interneting should be getting easier now.</p>

<p>Regards, <br/>
The Authors</p>
```

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-line-break-element-f40443.png)

## 2. H**orizontal rules: `<hr/>`**

```html
<h2>Empty Elements</h2>

<p>Thanks for reading! Interneting should be getting easier now.</p>

<p>Regards,<br/>
The Authors</p>

<hr/>

<p>P.S. This page might look like crap, but we'll fix that with some CSS
soon.</p>
```

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/html-horizontal-rule-element-49f526.png)

# ⇒ S**ummary**

Chương này có thể giống như một danh sách vô tận các phần tử HTML, và về cơ bản, nó là như vậy. HTML khá đơn giản khi nói đến nó. Các trang web được tạo thành từ các phần tử HTML, mỗi elements đều một ý nghĩa khác nhau cho mỗi mục đinh sử dụng lên bản mà nó chứa và các element có thể được lồng vào nhau. 

Những gì chúng tôi đã làm trong chương này luôn là bước đầu tiên trong quá trình phát triển web — bạn cần xác định những gì bạn muốn hiển thị lên trang web bằng (HTML) và mô tả lại nó bằng cách sử dụng (CSS). 

![Untitled](https://www.internetingishard.com/html-and-css/basic-web-pages/basic-web-pages-f786d5.png)