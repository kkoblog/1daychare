"use client";
import React, { useState } from "react";
// Next.js の Image を使う場合はコメントイン
// import Image from "next/image";

export default function MainComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, scheduleDate }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "登録に失敗しました");
      }
      window.location.href = "/thanks";
    } catch (err) {
      setError(err.message || "申し込みに失敗しました。後でもう一度お試しください。");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* ── ヘッダー ── */}
      <header className="px-4 py-6 text-center">
        <p className="inline-block text-rose-500 text-sm font-medium">
          ＼ 出したいけど、出ない人へ ／
        </p>
        <div className="mt-2 mx-auto w-2/3 border-b-2 border-rose-200"></div>
      </header>

      {/* ── ファーストビュー ── */}
      {/* モバイル：縦並び (flex-col)、PC以上：横並び (md:flex-row) */}
      <section className="px-4 py-8 flex flex-col md:flex-row items-center md:items-start">
        {/* テキストエリア */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-3">
            <span className="inline-block bg-rose-500 text-white px-2 py-1 rounded-none">
              私に1日ください
            </span>
            <br/>
            あなたの便秘を解消し、<br/>便秘知らずの
            <span className="text-rose-500">快腸ボディ</span>
            な人間に変えてみせます<br/>それを
            <span className="text-rose-500">無料</span>
            で証明させてください
          </h1>
        </div>

        {/* 画像エリア（角丸を外す） */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/images/top.jpg"
            alt="シニア女性のイメージ"
            className="w-full max-w-xs shadow-md object-cover rounded-none"
          />
        </div>
      </section>

      {/* プログラム案内 */}
      <section className="px-4 pb-12">
        <div className="w-full bg-rose-500 rounded-lg p-4 text-center mb-6">
          <p className="inline-block bg-beige-50 rounded-none px-4 py-3 text-3xl font-bold text-rose-700">
            新・快腸ボディ体験
          </p>
          <p className="text-beige-50 mt-2 text-sm">
            ＼1日完結無料集中体験会・10名限定／
          </p>
          <section
            className="MF-cntr MF-cntr-register pos-c orange"
            style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}
          >
            <form
              method="POST"
              className="MF-fm w-full"
              action="https://mail.os7.biz/pub/member_adddel/NO6a"
            >
              <div className="MF-inr w-full">
                <div className="MF-itmr w-full">
                  <label className="MF-itm MF-itm-mail w-full">
                    <span className="MF-itm-name">メールアドレス</span>
                    <input
                      className="MF-fld w-full"
                      type="email"
                      name="mail"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>
                <div className="MF-btn-div MF-itmr w-full">
                  <button
                    name="submit_reg"
                    className="MF-btn w-full"
                    type="submit"
                  >
                    たった1日で快腸ボディを手に入れる
                  </button>
                </div>
              
              登録は1分で完了／不要ならいつでも解除できます
          
              </div>

              <div className="MF-hiddenFld">
                <input type="hidden" name="oid" value="1041988" />
                <input type="hidden" name="hash" value="NO6a" />
                <input type="hidden" name="plan_id" value="193747" />
                <input type="hidden" name="form_id" value="HTMLフォーム" />
                <input
                  type="hidden"
                  name="encoding_test"
                  value="あいうえお眉幅ABC"
                />
              </div>
            </form>
          </section>
          <link rel="stylesheet" type="text/css" href="https://mail.os7.biz/current/css/html_form/common.css" />
          <link rel="stylesheet" type="text/css" href="https://mail.os7.biz/current/css/html_form/colors/orange.css" />
        </div>

      </section>

  

      {/* ===== ここから下部：3つの特徴セクション ===== */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">快腸ボディ体験3つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">特徴１：飲むだけ簡単ケア</h3>
              <p className="text-gray-600 text-center">
              忙しい毎日でも手軽に始められます。食事制限や運動は不要で、ミネラルが腸をやさしくサポート。
                初めての方でも無理なく続けられるのが魅力です。
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              
              <h3 className="text-xl font-semibold mb-2">特徴２：翌朝のスッキリ実感</h3>
              <p className="text-gray-600 text-center">
              長年の「出ない」ストレスから解放され、目覚めた瞬間に感じるお腹の軽さ。
                心も体も解放される爽快感を、あなたの朝にお届けします。
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              
              <h3 className="text-xl font-semibold mb-2">特徴３：結果保証</h3>
              <p className="text-gray-600 text-center">
              50名以上が実感した結果をあなたにも。初めての方も安心してご参加ください。
              対応に限りがあるため、10名限定のご案内になります。
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== ここから：参加者の声セクション ===== */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-rose-500">
            体験会に参加した方の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ── 香織さん ── */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-300 flex items-start">
              {/* Next.js Image を使う場合 */}
              {/*
              <Image
                src="/images/kaori.jpg"
                alt="香織さん"
                width={64}
                height={64}
                className="rounded-full mr-4 flex-shrink-0"
              />
              */}
              {/* 普通の img を使う場合 */}
              <img
                src="/images/kaori.png"
                alt="香織さん"
                className="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover"
              />
              <div>
                <p className="text-gray-700 mb-4">
                  「幼少期からしつこい便秘に悩まされてきましたが、
                  今はそれを手放して、毎日気持ちよくよい便りがきます(笑)」

                 
                </p>
                <p className="text-sm font-semibold text-rose-500">
                  - 香織さん（40代・4児のママ）
                </p>
              </div>
            </div>

            {/* ── ちさこさん ── */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-300 flex items-start">
              {/* Image */}
              <img
                src="/images/chisako.png"
                alt="ちさこさん"
                className="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover"
              />
              <div>
                <p className="text-gray-700 mb-4">
                  便秘薬に頼りきりだった私が、1日体験会で紹介されたことを始めてわずか2週間でお通じが変化。1ヶ月後には毎日"バナナうんち"、3ヶ月目には1日2回に増え、首の稗粒腫まで自然に消えました。まずは1日体験会で、その驚きをご自身の体で確かめてみてください。
                </p>
                <p className="text-sm font-semibold text-rose-500">
                  - ちさこさん（40代・主婦）
                </p>
              </div>
            </div>

            {/* ── 福村さん ── */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-300 flex items-start">
              {/* Image */}
              <img
                src="/images/kenta.png"
                alt="福村さん"
                className="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover"
              />
              <div>
                <p className="text-gray-700 mb-4">
                  「出会った頃から軟便に悩む嫁にこの体験してもらったところ、3ヶ月ほどで形のある便が出るようになり腸内環境の改善を実感。以前は小さな物音で何度も目覚めていたのに、今は深い眠りが続き朝までぐっすり眠れるようになりました。起床時のだるさや寝不足感が消え、軽やかな目覚めを見るのが本当に嬉しいです。」
                </p>
                <p className="text-sm font-semibold text-rose-500">
                  - 福村さん（30代・2児のパパ）
                </p>
              </div>
              
            </div>
          </div>

          <p className="text-gray-400 text-xs mb-4">
                  ※個人の感想であり、すべての方に同様の結果を保証するものではありません。
                </p>
        </div>
      </section>
      {/* ── ここから：講師プロフィールセクション ── */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            講師プロフィール
          </h2>
          <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
            <img
              src="/images/kko.png"
              alt="講師写真"
              className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
            />
            <div className="text-gray-700">
              <h5 className="text-1xl mb-2">レコメンド出版</h5>
              <h3 className="text-2xl font-semibold mb-2">k子</h3>

              <p className="mb-4 leading-relaxed">
                普段はAI活用や副業支援のオンライン活動を中心に、
                セミナー登壇やイベント運営などを行い、
                わずか5ヶ月で月収100万円を達成するなど、
                ビジネス分野でも実績を積んできました。
              </p>
              <p className="mb-4 leading-relaxed">
                …でも今回の「新・快腸体験会」だけは、全く別なんです。
              </p>
              <p className="mb-4 leading-relaxed">
                これは私が母として、
                "10年以上の便秘に悩む実の母"にある体験させたことから始まりました。
              </p>
              <p className="mb-4 leading-relaxed">
                すると翌朝――「出たよ！ありがとう…！」と笑顔で言ってくれたんです。
                その瞬間、心から「これを多くの人に届けたい」と思いました。
              </p>
              <p className="mb-4 leading-relaxed">
                
                ただ、自分の大切な人が喜んでくれたもの・変化を感じたものを、
                同じように悩む方にも届けたい。
              </p>
              <p className="mb-4 leading-relaxed">
                そんな想いから、この体験会を立ち上げました。
              </p>
              <p className="mb-4 leading-relaxed">
                実際に、すでに50人以上もの女性がこの体験をしたことによって
                「1日で出た！」「肌も気分も軽い！」という実感の声を
                届けてくれています。
              </p>
              <p className="mb-4 leading-relaxed">
                「大切な人の健康を願う、私だからこそ伝えられる方法」
                それがこの新・快腸体験会です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="w-full bg-rose-500 rounded-lg p-4 text-center mb-6">
          <p className="inline-block bg-beige-50 rounded-none px-4 py-3 text-3xl font-bold text-rose-700">
            新・快腸ボディ体験
          </p>
          <p className="text-beige-50 mt-2 text-sm">
            ＼1日完結無料集中体験会・10名限定／
          </p>
          <section
            className="MF-cntr MF-cntr-register pos-c orange"
            style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}
          >
            <form
              method="POST"
              className="MF-fm w-full"
              action="https://mail.os7.biz/pub/member_adddel/NO6a"
            >
              <div className="MF-inr w-full">
                <div className="MF-itmr w-full">
                  <label className="MF-itm MF-itm-mail w-full">
                    <span className="MF-itm-name">メールアドレス</span>
                    <input
                      className="MF-fld w-full"
                      type="email"
                      name="mail"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>
                <div className="MF-btn-div MF-itmr w-full">
                  <button
                    name="submit_reg"
                    className="MF-btn w-full"
                    type="submit"
                  >
                    たった1日で快腸ボディを手に入れる
                  </button>
                </div>
               
                  ※登録は1分で完了／不要ならいつでも解除できます
              
              </div>

              <div className="MF-hiddenFld">
                <input type="hidden" name="oid" value="1041988" />
                <input type="hidden" name="hash" value="NO6a" />
                <input type="hidden" name="plan_id" value="193747" />
                <input type="hidden" name="form_id" value="HTMLフォーム" />
                <input
                  type="hidden"
                  name="encoding_test"
                  value="あいうえお眉幅ABC"
                />
              </div>
            </form>
          </section>
          <link rel="stylesheet" type="text/css" href="https://mail.os7.biz/current/css/html_form/common.css" />
          <link rel="stylesheet" type="text/css" href="https://mail.os7.biz/current/css/html_form/colors/orange.css" />
        </div>

      </section>

      {/* ── フッター ── */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <a
            href="https://marbled-week-cbc.notion.site/1d8e0c77b11c80e588cbe29270efa7f4?pvs=4"
            className="text-blue-600 hover:underline"
          >
            プライバシーポリシー
          </a>
          <p className="text-gray-600 text-sm">
            Copyright(c) 2025 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}