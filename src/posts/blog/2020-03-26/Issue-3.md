---
title: "react build시 index.html 빈화면이 나오는 이슈"
date: "2020-03-26"
category: "Develop"
desc: "react build시 index.html 빈화면이 나오는 이슈 해결법"
thumbnail: "./error-1.png"
alt: "react build시 index.html 빈화면이 나오는 이슈"
---

## 원인

index.html에서의 static/js와 css 경로가 잘못되었기 때문입니다.  
chorme에서 개발자도구를 열어보면 콘솔에 다음과 같은 오류가 나옵니다.

![error](./error-1.png)

## 해결방법

js와 css 경로가 /static/....으로 되어있는데 ./static으로 변경해 주시면 문제없이 출력됩니다.

```html

<link href="/static/css/main.ab056bcf.chunk.css" rel="stylesheet">
</script><script src="/static/js/2.fc65b5d6.chunk.js"></script>
<script src="/static/js/main.6527b855.chunk.js"></script>

```

저렇게 /경로로 되어있는 코드들을 수정해 주어야 합니다.

```html

<link href="./static/css/main.ab056bcf.chunk.css" rel="stylesheet">
</script><script src="./static/js/2.fc65b5d6.chunk.js"></script>
<script src="./static/js/main.6527b855.chunk.js"></script>

```

이렇게 수정하면 문제없이 출력됩니다.
