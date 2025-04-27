"use client";
import React, { useState, useEffect } from "react";

/**
 * CountdownTimer コンポーネント
 * - initialSeconds（デフォルト 90秒）からカウントダウンを開始
 * - 0 になったら自動的に停止
 */
function CountdownTimer({ initialSeconds = 90 }) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;  // 0 以下なら何もしない

    const intervalId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // クリーンアップ
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // 時・分・秒を計算
  const hours   = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // 2桁表示用
  const pad = num => String(num).padStart(2, "0");

  return (
    <div className="mt-4 flex justify-center items-end text-pink-500 text-4xl font-bold space-x-4">
      <div className="flex flex-col items-center">
        <span>{hours}</span>
        <span className="mt-1 text-sm text-gray-600">時間</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{pad(minutes)}</span>
        <span className="mt-1 text-sm text-gray-600">分</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{pad(seconds)}</span>
        <span className="mt-1 text-sm text-gray-600">秒</span>
      </div>
    </div>
  );
}

export default function MainComponent() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col py-16">
        <div className="max-w-4xl mx-auto px-4 flex-grow">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              本登録はまだ完了していません
            </h1>
          </div>

          <div className="border-2 border-red-500 rounded-xl p-8 mb-8 text-center">
            <h2 className="text-3xl font-bold leading-snug">
              <span>このチャレンジは</span>
              <br />
              <span className="text-green-500 underline decoration-red-500 decoration-dotted underline-offset-4">
                LINEオープンチャットで
              </span>
              <br />
              <span className="underline decoration-red-500 decoration-dotted underline-offset-4">
                行われます！
              </span>
            </h2>

            <div className="mt-4 space-y-1 text-gray-700">
              <p>ご案内・体験キットの受け取りフォームはすべて、</p>
              <p>チャット内に記載しています。</p>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-800">
              90秒以内に参加を完了してください
            </h3>

            {/* カウントダウンタイマー表示部分 */}
            <CountdownTimer initialSeconds={90} />

            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              メールでは届かない可能性があるので<br />
              到達率100%の<span className="text-green-500">LINEオープンチャット</span>でお届けします。
            </p>

            <div className="mt-6 flex justify-center space-x-6">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
            </div>

            <a
              href="https://line.me/ti/g2/DZMEQDaUm3-zyPqcUC-amk6jdEJBW22ousRBOA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 rounded-full shadow-lg transition-all"
            >
              <i className="fab fa-line mr-2"></i>
              LINEオープンチャットに参加する
            </a>
            <p className="mt-2 text-sm text-gray-500">
              ※匿名でもご参加できます
            </p>
          </div>

          {/* ── 新デザイン：登録促進メッセージ ── */}
          <div className="rounded-xl p-8 mb-8 text-center bg-gradient-to-r from-blue-50 to-pink-50">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 leading-snug mb-4">
              必要な情報を全て受け取るために、<br />
              <span className="text-green-500">LINEオープンチャット</span>に今すぐ登録してください。
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              <span>※オープンチャットに参加しないと、</span>
              <span className="text-pink-500">チャレンジやキット受け取り情報が届かない</span>
              <span>可能性がありますのでご注意ください。</span>
            </p>
          </div>

          {/* ── シンプル見出し＆CTA ── */}
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              たった3秒で<br />
              <span className="text-green-500">LINEオープンチャット</span>に参加できます！
            </h3>
            <a
              href="https://line.me/ti/g2/DZMEQDaUm3-zyPqcUC-amk6jdEJBW22ousRBOA?utm_source=invitation&utm_medium=link_copy&utm_campaign=defaultr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 rounded-full shadow-lg transition-all"
            >
              <i className="fab fa-line mr-2"></i>
              LINEオープンチャットに参加する
            </a>
            <p className="mt-2 text-sm text-gray-500">
              ※匿名でもご参加できます
            </p>
          </div>
        </div>
      </div>

      {/* ── 体験会に参加した方の声セクション ── */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-rose-500">
            体験会に参加した方の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 香織さん */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-300 flex items-start">
              <img
                src="/images/kaori.png"
                alt="香織さん"
                className="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover"
              />
              <div>
                <p className="text-gray-700 mb-4">
                  「幼少期からしつこい便秘に悩まされてきましたが、今はそれを手放して、毎日気持ちよくよい便りがきます(笑)」
                </p>
                <p className="text-sm font-semibold text-rose-500">
                  - 香織さん（40代・4児のママ）
                </p>
              </div>
            </div>

            {/* ちさこさん */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-300 flex items-start">
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

            {/* 福村さん */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-300 flex items-start">
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

          <p className="text-gray-400 text-xs mt-6">
            ※個人の感想であり、すべての方に同様の結果を保証するものではありません。
          </p>
        </div>
      </section>

      {/* ── ページ最下部のCTA ── */}
      <footer className="py-8 bg-white text-center">
        <a
          href="https://line.me/ti/g2/DZMEQDaUm3-zyPqcUC-amk6jdEJBW22ousRBOA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 rounded-full shadow-lg transition-all text-center"
        >
          <i className="fab fa-line mr-2"></i>
          LINEオープンチャットに参加する
        </a>
        <p className="mt-2 text-sm text-gray-500">
          ※匿名でもご参加できます
        </p>
      </footer>
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