---
description: |-
  イベント当日、チケットのQRコードをスキャンして、入退場管理をすることができます。
  このページでは、Eventapoの便利な入退場管理機能について説明します。
---
# チケットのスキャンと入退場

イベント当日、チケットのQRコードをスキャンして、入退場管理をすることができます。  
このページでは、Eventapoの便利な入退場管理機能について説明します。

## チケットのスキャン方法

### 1. イベント管理者画面にアクセス

![Eventapo イベント管理画面](/images/guide/eventapo-admin.png)

まず、イベント管理者画面にアクセスします。  
次に、左メニューから「会場操作」を選択します。

<VPFeatures
  class="half-width"
  :features="[
    {
      'title': 'QRコードスキャン',
      'details': '参加者のQRコードをスキャンして入場処理を行います。'
    }
  ]"
/>

「QRコードスキャン」を選択します。

### 2. 参加者のQRコードをスキャン

カメラのアクセスを許可すると、カメラが起動します。

![QRコードスキャン](/images/guide/eventapo-admin-live-scan.png)

参加者のチケットQRコードをスキャンすると、画面右側に情報が表示されます。

### 3. 入場処理

参加者の情報を確認し、入場処理を行います。  
「入場」と書かれたボタンを押すと、入場とマークされます。  
「退場と書かれたボタンを押すと、退場とマークされます。

## 便利機能 改札モードについて

### 改札モードとは

改札モードを使うと、チケットをスキャンした際に、自動的に入場処理を行うことができます。  
未入場の方は、入場とマークされ、入場済みの方は、退場とマークされます。

| スキャン結果 | 自動処理後 |
| --- | --- |
| 未入場 | 入場 |
| 入場済み | 退場 |
| 退場済み | 入場 |

### 改札モードの設定

![改札モード](/images/guide/eventapo-admin-live-scan-gate-mode.png)

画面下部にある改札モードを有効にすると、改札モードが有効になります。  
改札モードを無効にすると、通常の入場処理が行われます。

## 音声・効果音について

チケットをスキャンした際に、効果音が再生されます。  
効果音は以下の通りです。

### 効果音

#### スキャン

<audio src="/sounds/scan.mp3" controlslist="nodownload nofullscreen noremoteplayback" controls></audio>

#### 入場(改札モード)

<audio src="/sounds/gate.mp3" controlslist="nodownload nofullscreen noremoteplayback" controls></audio>

#### 退場(改札モード)

<audio src="/sounds/gate-out.mp3" controlslist="nodownload nofullscreen noremoteplayback" controls></audio>

#### スキャンエラー

<audio src="/sounds/error.mp3" controlslist="nodownload nofullscreen noremoteplayback" controls></audio>

以上が、Eventapoの入退場管理機能についての説明です。  
イベント当日、スムーズな入退場管理を行いましょう！

次のページでは、参加者一覧の確認方法について説明します。
