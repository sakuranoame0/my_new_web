import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Component = () => {
  const [post, setPost] = React.useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [orgname, setOrgname] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();

  const createPost = () => {
    axios
      .post(baseURL, {
        name: { name },
        email: { email },
        orgname: { orgname },
        category: { category },
        content: { category }
      })
      .then((response) => {
        setPost(response.data);
      });
  };

  const changeName = (e) => {
    setName(() => e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(() => e.target.value);
  };
  const changeOrgname = (e) => {
    setOrgname(() => e.target.value);
  };
  const changeCategory = (e) => {
    setCategory(() => e.target.value);
  };
  const changeContent = (e) => {
    setContent(() => e.target.value);
  };

  return (
    <>
      <body>
        <div>
          <h1>お問い合わせフォーム</h1>
        </div>
        <div class="margin">
          お名前
          <span class="required">必須</span>
        </div>
        <div>
          <p>
            <input value={name} onChange={changeName} />
          </p>
        </div>
        <div class="block">
          メールアドレス
          <span class="required">必須</span>
        </div>
        <div>
          <p>
            <input value={email} onChange={changeEmail} />
          </p>
        </div>
        <div class="block">
          会社名
          <span class="required">必須</span>
        </div>
        <div>
          <p>
            <input value={orgname} onChange={changeOrgname} />
          </p>
        </div>
        <div class="block">
          お問い合わせカテゴリ
          <span class="required">必須</span>
        </div>
        <div>
          <select value={category} onChange={changeCategory}>
            <option>お問い合わせ</option>
            <option>その他</option>
          </select>
        </div>
        <div class="block">
          お問い合わせ内容
          <span class="required">必須</span>
        </div>
        <div>
          <p>
            <textarea
              value={content}
              onChange={changeContent}
              cols="30"
              rows="5"
            ></textarea>
          </p>
        </div>
        <div>
          <button onClick={createPost} type="submit">
            送信
          </button>
        </div>
      </body>
    </>
  );
};

export default Component;
