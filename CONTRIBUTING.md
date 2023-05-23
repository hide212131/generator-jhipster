# JHipsterへの貢献

あなたはJHipsterに貢献する準備ができていますか?私たちはあなたを参加させたいと思っており、私たちはできる限りあなたを支援します。私たちがより多くの助けとなることができるように、私たちがあなたに従ってほしいガイドラインは次のとおりです:

- [質問とヘルプ](#question)
- [問題とバグ](#issue)
- [バグ報奨金](#bounties)
- [機能の要求](#feature)
- [RFC](#RFCs)
- [送信ガイドライン](#submit)
- [ジェネレータ開発の設定](#setup)
- [コーディングルール](#rules)
- [Gitコミットのガイドライン](#commit)

また、[プロジェクトへの資金提供](OpenCollectiveを使ったhttps://www.jhipster.tech/sponsors/)も受け入れていることを忘れないでください。

## <a name="question"></a>質問とヘルプ

これはJHipsterバグ・トラッカで、[Issues and Bugs](#issue)と[Feature Requests](#feature)に使用されます。ヘルプ・デスクやサポート・フォーラムでは **ありません** 。

JHipsterの使用について質問がある場合、またはJHipsterプロジェクトのヘルプが必要な場合は、[ヘルプページを読む](https://www.jhipster.tech/help/)で[StackOverflowのJHipsterタグ](http://stackoverflow.com/tags/jhipster)を使用するか、[Gitter.imチャットルーム](https://gitter.im/jhipster/generator-jhipster)に参加してください。

## <a name="issue"></a> 問題とバグ

ソースコードのバグやドキュメントの間違いを見つけた場合は、[チケットを送信](https://opensource.guide/how-to-contribute/#opening-an-issue)して、[GitHub issues](https://github.com/jhipster/generator-jhipster/issues)に送信してください。さらに、[JHipsterジェネレータプロジェクト](https://github.com/jhipster/generator-jhipster)または[ドキュメントプロジェクト](https://github.com/jhipster/jhipster.github.io)にプルリクエストを送信することもできます。

**下記の提出ガイドラインを参照してください**。

## <a name="bounties"></a>バグ報奨金

"\$100"タグの付いたチケットを修正するプルリクエストを送信した場合は、バグ報奨金プログラムの対象となります!詳細については、[バグ報奨金に関するドキュメント](https://www.jhipster.tech/bug-bounties/)にアクセスして、料金を請求してください。

## <a name="feature"></a> Feature Requests

新しい機能をリクエストするには、[GitHub issues](https://GitHub.com/jhipster/generator-jhipster/issues)にチケットを送信してください。
新しい機能を実装したい場合は、それがどのような変更であるかを検討してください:

- **主要な変更** についてあなたがプロジェクトに貢献したい場合、最初に議論される必要があります。タイトルに機能要求であることが明記されたチケットを開き、説明であなたが達成したいことを明確に説明すると、JHipsterチームはそのチケットで何をすべきかをあなたと議論します。その後、あなたはプルリクエストの作業を開始できます。主要な変更提案を伝達し、コアチームからレビューを受けるために、あなたはRFCを提出することもできます。
- **小さな変更** は、ディスカッションなしで提案できます。タイトルに機能リクエストであることが明記されたチケットを開きます。説明欄に変更内容を記載すると、すぐにプルリクエストを提案できます。

## <a name="rfcs"></a> RFC

時には、主要な機能要求が「複雑」または「本質的」であることもあります。この場合、GitHub Issuesは、合意に達するために何度も行ったり来たりする必要があるため、それらを提示するのに最適なツールではないかもしれません。

そのため、これらの機能要求は正式な設計プロセスを経て、"RFC" (request for comments)に記述された仕様を持つようにし、プルリクエストレビューを通じてチームによって検証してもらうことにしています。

RFCプロセスは、プロジェクトの主要な機能と方向性に対して、一貫した管理された道筋を提供することを目的としています。

RFCを送信するには、次の手順を実行します。

1. GitHubイシューまたはその他のチャネルを通じて、コアチームとRFC提案について議論します。
2. Feature Requestの最初のGitHubイシューがまだ存在しない場合は作成します。
3. `rfcs/0-jhipster-rfc-template.md`を`rfcs/${featureRequestIssueNumber}-my-feature-request-name.md`にコピーします。
4. RFCに記入し、必要なすべてのセクションを完了するようにします。
5. RFCをプルリクエストとして送信し、提案の概要をPRの説明に記載します。
6. コンセンサスを構築し、レビュー担当者からのフィードバックを統合します。
7. プルリクエストは、受け入れられる（マージされる）か、または拒否（クローズ）、または延期（「保留中」ステータス）されます。

注:JHipsterのRFCプロセスは、[RustのRFC](https://rust-lang.github.io/rfcs/)に触発されたものです。

## <a name="submit"></a> 提出ガイドライン

### [Issueの送信](https://opensource.guide/how-to-contribute/#opening-an-issue)

Issueを送信する前に、[アーカイブ](https://github.com/jhipster/generator-jhipster/issues?utf8=%E2%9C%93&q=is%3Aissue)を検索してください。おそらく、あなたの質問はすでに回答されています。

問題がバグのようで、まだ報告されていない場合は、新しい問題を開きます。
重複する問題を報告しないことで、
問題の修正と新機能の追加に費やすことができる労力を最大化できるようになります。
次の情報を提供することで、問題が迅速に処理される可能性が高まります:

- **問題の概要** - エラーがスローされている場合は、スタックトレースが役立ちます。
- **動機またはユースケース** - これがあなたにとってバグである理由を説明してください
- **エラーを再現する** - エラーを再現するための明確な手順のセット。JavaScriptエラーがある場合は、
[JSFiddle](http://jsfiddle.net/)でライブサンプルを提供できる可能性があります。
- **関連する問題** - 同様の問題は以前にも報告されていますか?
- **修正を提案する** - 自分でバグを修正できない場合は、
問題の原因（コード行またはコミット）を指摘できます。
- **JHipsterバージョン** - これはリグレッションですか?
- **JHipster設定。ルートフォルダに生成された`.yo-rc.json`ファイル** - これはシナリオを複製するのに役立ちます。rememberMeキーを削除できます。
- **エンティティ構成。`.jhipster`ディレクトリに生成される`entityName.json`ファイルが** - エラーがエンティティの作成中であるか、特定のエンティティに関連付けられている場合
- **ブラウザとオペレーティングシステム** - これはすべてのブラウザの問題ですか、それともIE8だけの問題ですか?

必要な情報を提供するには、`jhipster info`を使用してください。

[ここ][issue-template]をクリックして、事前に入力されたテンプレートを使用してバグの問題を開きます。機能の要求や問い合わせには、[このテンプレート][feature-template]を使用できます。

上記の必要な情報のほとんどを取得するには、プロジェクトフォルダで`jhipster info`を実行します。

これらの情報なしでオープンされた問題は、説明なしで**クローズ**されます。

### [プルリクエストの送信](https://opensource.guide/how-to-contribute/#opening-a-pull-request)

プル要求を送信する前に、次のガイドラインを考慮してください。

- [GitHub](https://github.com/jhipster/generator-jhipster/pulls?utf8=%E2%9C%93&q=is%3Apr)で、送信に関連するオープンまたはクローズされたプルリクエストを検索します。
- JHipsterジェネレータを変更したい場合は、[Generator開発セットアップ](#setup)を読んでください。
- 新しいgitブランチで変更を行います。

  ```shell
  git checkout -b my-fix-branch main
  ```

- **適切なテストケース**を含むパッチを作成します。
- 私たちの[コーディングルール](#rules)に従ってください。
- 新しいJHipsterプロジェクトを生成し、すべてのテストに合格することを確認します。

  ```shell
  mvnw verify -Pprod
  ```

- 新しいプロジェクトが正しく実行されることをテストします。

  ```shell
  mvnw spring-boot:run
  ```

- 継続的インテグレーション(GitHub ActionsとAzure Pipelinesを使用)は、[ここ](#running-integration-tests-locally)に従うことで生成できます。

- [コミットメッセージのきまり](#commit-message-format)に従った記述的なコミットメッセージを使用して、変更をコミットします。

  ```shell
  git commit -a
  ```

  注:オプションのcommit `-a`コマンドラインオプションは、編集されたファイルを自動的に"add"および"rm"します。

- ブランチをGitHubにプッシュします:

  ```shell
  git push origin my-fix-branch
  ```

- GitHubで、`jhipster/generator-jhipster:main`にプルリクエストを送信します。
- 私たちが変更を提案する場合

  - 必要な更新を行います。
  - 生成されたサンプルプロジェクトでJHipsterテストを再実行して、テストがまだ合格していることを確認します。
  - ブランチをリベースして、GitHubリポジトリに強制的にプッシュします（これによりプルリクエストが更新されます）:

    ```shell
    git rebase main -i
    git push -f
    ```

以上です!ご協力ありがとうございました!

#### マージの競合を解決する ("このブランチには解決する必要のある競合があります")

PRでは、アップストリームリポジトリのメインブランチとのマージ競合が発生することがあります。これを解決する方法はいくつかありますが、正しく行わないと、これは本当に悪夢になる可能性があります。ここでは、非常にうまく機能する1つの方法を示します。

- まず、メインから最新の情報を取得します。

  ```shell
  git fetch upstream
  ```

- upstream/main に対してブランチをベース変更します。

  ```shell
  git rebase upstream/main
  ```

- Gitは最初のマージ競合でリベースを停止し、どのファイルが競合しているかを示します。ファイルを編集し、競合を解決してから以下を実施します。

  ```shell
  git add <the file that was in conflict>
  git rebase --continue
  ```

- リベースは次の競合まで続行されます。すべてのファイルがマージされ、リベースが正常に終了するまで、前の手順を繰り返してください。
- 生成されたサンプルプロジェクトでJHipsterテストを再実行して、テストがまだ合格していることを確認します。
- GitHubリポジトリへ強制プッシュします（プルリクエストを更新します）

  ```shell
  git push -f
  ```

#### プルリクエストがマージされた後

プルリクエストがマージされたら、ブランチを安全に削除して、
メイン (upstream)リポジトリから変更をプルできます。

- 次のように、GitHub Web UIまたはローカルシェルのいずれかを使用して、GitHub上のリモートブランチを削除します:

  ```shell
  git push origin --delete my-fix-branch
  ```

- mainブランチをcheckoutします。

  ```shell
  git checkout main -f
  ```

- ローカルブランチを削除します。

  ```shell
  git branch -D my-fix-branch
  ```

- 最新のupstreamバージョンでmainを更新します。

  ```shell
  git pull --ff upstream main
  ```

## <a name="setup"></a> Generator開発セットアップ

JHipsterは[Yeoman Generator](http://yeoman.io/)なので、変更を実行してテストするには、[Yeomanのオーサリング文書](http://yeoman.io/authoring/)に従う必要があります。

ここでは、最も重要な手順を示します。

### generator-jhipster projectをフォークする

[generator-jhipsterプロジェクト](https://github.com/jhipster/generator-jhipster)に移動し、"fork"ボタンをクリックします。次に、プロジェクトの独自のフォークを複製して、作業を開始できます。

[詳細については、GitHubフォーキングドキュメントをお読みください](https://help.github.com/articles/fork-a-repo)

### 複製されたプロジェクトを使用するようにNPMを設定する

複製された`generator-jhipster`プロジェクトで、`npm link`を実行してから`npm ci`を実行します。

`npm link`は、グローバルな`node_modules`バージョンからこのフォルダを指すシンボリックリンクを作成します。そのため、`jhipster`を実行すると、JHipsterの開発バージョンが使用されます。

`npm ci`は、すべてのプロジェクトの依存関係をクリーンインストールします。

テストでは、アプリケーションを生成する必要がありますが、ここには特定の問題があります。各アプリケーションに対して、JHipsterはそれ自体のローカルバージョンをインストールします。これは、複数のアプリケーションがそれぞれ特定のJHipsterバージョンを使用できるようにするためです(アプリケーションAはJHipster 3.1.0を使用し、アプリケーションBはJHipster 3.2.0を使用します)。

これを解決するには、生成されたプロジェクトフォルダでも`npm link generator-jhipster`を実行して、ローカルバージョンがJHipsterの開発バージョンへのシンボリックリンクを持つようにする必要があります。
あるいは、オプション`--skip-jhipster-dependencies`を追加して、JHipsterの依存関係を無視してアプリケーションを生成します（そうしないと、npm install/ciが呼び出されるたびにリリースバージョンがインストールされます）。後でコマンド`jhipster --no-skip-jhipster-dependencies`を使用して、依存関係を再追加できます。

簡単に言うと、次のことが必要です。

1.  `generator-jhipster`プロジェクトで`npm link`を実行します（グローバルにリンクされます）。
2.  生成されたアプリケーションフォルダで`jhipster --skip-jhipster-dependencies`を実行します。

`jhipster --install-path`を実行すると、jhipsterがどこから実行されているかを確認できます。

設定をテストするには、クローンしたジェネレータに小さな変更を加え、既存のJHipsterプロジェクトで再度実行します。

jhipsterサードパーティライブラリ(react-jhipster、ng-jhipsterなど)を使用するプロジェクトの場合は、ライブラリプロジェクトでも`npm link`を実行する必要があります。次に、npmは、生成されたプロジェクトからライブラリプロジェクトに元のフレームワーク(reactなど)をリンクします。`cd react-jhipster && npm link <path-to-generated-project>/node_modules/react`

```shell
jhipster
```

ジェネレータのどの部分を変更したかに応じて、適切な引数を指定してjhipsterコマンドを実行することを忘れないでください。たとえば、エンティティテンプレートを更新する場合は、次のコマンドを実行します。

```shell
jhipster --with-entities
```

変更内容が、生成されたプロジェクトに反映されます。

注意:ジェネレータが[jhipster/jhipster-bom](https://github.com/jhipster/jhipster-bom)のスナップショット・バージョンを使用している場合、生成されたプロジェクトが正しく構築されないことがあります。この問題は、https://github.com/jhipster/generator-jhipster/issues/9571 で言及されています。この場合、jhipster/jhipster-bomプロジェクトをクローニングし、次を使用して構築します。

```shell script
./mvnw clean install -Dgpg.skip=true
```

または、Windowsの場合:

```
.\mvnw.cmd clean install -D"gpg.skip=true"
```

### テキストエディタを使用する

JHipsterジェネレータの変更にはJavaおよびJavaScriptテンプレートの変更が含まれるため、ほとんどのIDEは正しく動作しません。[VSCode](https://code.visualstudio.com/)または[IntelliJ IDEA](https://www.jetbrains.com/idea/)のようなテキストエディタを使用して変更をコーディングすることをお勧めします。ESLintおよびEditorConfig拡張機能は、コードの規則を尊重するのに役立つことが推奨されます。

### デバッガの使用

Node.jsデバッガを使用してJHipsterのコードをデバッグすることができます。この設定を行うには、デバッガで`cli/jhipster.js`を起動します。

#### VSCodeを使用したデバッグ

**VSCode**を使用してJHipsterのデバッグを開始するには、ワークスペースでジェネレータコードを開き、F5キーを押すだけです(または、Ctrl/Cmd+Shift+Dで到達可能な**Debug**メニューの緑色の矢印をクリックします)。これにより、ジェネレータがデバッグモードで起動し、[test-integration/samples/app-sample-dev](test-integration/samples/app-sample-dev)フォルダにファイルが生成されます。

他のデバッグオプション(例えば`jhipster entity`)の1つを選択することで、サブジェネレータをデバッグすることもできます。これらのデバッグ設定は`.vscode/launch.json`ファイルで指定されます。

## ジェネレータのテストとスナップショット

lint/prettierを使用してすべてのテストを実行します。
`npm test`

lint/prettierを使用せずすべてのテストを実行します。
`npx mocha`

すべてのテストスナップショットを更新します。
`npm run update-snapshots`

特定のテストを実行します。
`npx mocha <path>`

（エラー報告が改善された）特定のテストを連続して実行します。
`npx mocha <path> --no-parallel`

特定のテストスナップショットを更新します。
`npm run update-snapshot -- <path>` or `npx mocha <path> --no-parallel --updateSnapshot`

lintエラーとprettierエラーを修正します。
`npm run lint-fix`

## ローカルでの統合テストの実行

ビルドをローカルで実行するには、次のコマンドを使用します。

ジェネレータのソースコードルートフォルダから、`cd test-integration`を使用して`test-integration`フォルダに移動します。

`./generate-sample.sh <command_name> [folder] [sample_name:optional] [type of entity]`を実行します。

これにより、構成とエンティティを含むフォルダが作成されます。次に、JHipsterプロジェクトを手動で生成し、テストできます。

コマンド名は次のとおりです。

    `list`:すべてのサンプル名を一覧表示します
    `generate`:サンプルを生成します

## <a name="rules"></a>コーディングルール

ソースコード全体の一貫性を確保するために、作業時には次の規則に注意してください。

- すべての機能またはバグ修正は、1つ以上のテストによって**テストされる必要があります**。
- すべてのファイルは、JHipsterジェネレータプロジェクトのルートにある[.editorconfigファイル](http://editorconfig.org/)に従う必要があります。生成されたプロジェクトは同じ`.editorconfig`ファイルを使用するため、ジェネレータと生成されたプロジェクトの両方が同じ構成を共有することに注意してください。
- Javaファイルは、Intellij IDEAデフォルトコードスタイルを使用して**フォーマットする必要があります**。
- Generators JavaScriptファイルは、プロジェクトルートで定義されたeslint設定に**従う必要があります**。これは、[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)をベースとしたものです。
- クライアント側の機能/変更は、Angularクライアントとreactクライアントの両方に対して行う必要があります
- WebアプリのJavaScriptファイルは[GoogleのJavaScriptスタイルガイド](https://google.github.io/styleguide/jsguide.html)に**従う必要があります**。
- Angular Typescriptファイルは、[Angularスタイルの公式ガイド](https://angular.io/styleguide)に**従う必要があります**。
- React/Redux Typescriptファイルは、[React/Redux Typescriptガイド](https://github.com/piotrwitek/react-redux-typescript-guide)に**従う場合があります**。

プルリクエストを送信する前に、プロジェクトルートで`npm run lint`および`npm test`を必ず実行してください。`npm run lint-fix`を実行して、いくつかのリント問題を自動的に修正することもできます。

## <a name="templates"></a> テンプレートのガイドライン

yeomanが使用しているテンプレートエンジンは[EJS](http://ejs.co/)で、その構文はかなり単純です。
単純なコード(数行)の場合、ロジックをメインファイルに埋め込むことができますが、ロジックがより複雑になる場合は、JSフラグメントを最初のテンプレートに含まれるサブテンプレートに外部化し、同じフォルダ配置する方が良いです。

サブテンプレートの名前には`ejs`拡張子を付ける必要があります。これは、デフォルトのテンプレートであり、エディタが正しい構文強調表示を適用できるようにし、非常に簡潔な構文を使用できるようにするためです。

    <%- include('../common/field_validators', {field, reactive}); -%>

この文は、[_PersistClass_.java.jhi.jakarta_validation.ejs](generators/server/templates/entity/src/main/java/package/domain/_PersistClass_.java.jhi.jakarta_validation.ejs)テンプレートが[field_validators.ejs](generators/server/templates/entity/src/main/java/package/common/field_validators.ejs)サブテンプレートを含むことを意味します。

サブテンプレートは単体テストが可能です。

## <a name="commit"></a>Gitコミットのガイドライン

git commitメッセージをフォーマットする方法にはルールがあります。コミット履歴がクリーンになるように、不要なコミットを[squash](https://help.github.com/articles/about-git-rebase/#commands-available-while-rebase)してください。

コミットにドキュメントの変更のみが含まれる場合は、コミットメッセージヘッダーで`[ci skip]`または`[skip ci]`を使用して、継続的インテグレーションパイプラインをスキップできます。

### <a name="commit-message-format"></a>コミットメッセージの形式

各コミットメッセージは、**ヘッダー**、**本文**、および**フッター**で構成されます。

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

コミットメッセージのどの行も100文字を超えることはできません!これにより、メッセージがより簡単になり、
GitHubやさまざまなgitツールで読むことができます。

### ヘッダー

ヘッダーには、変更に関する簡潔な説明が表示されます。

- 命令を使用します。"changed"でも"changes"でもなく現在形の"change"です。
- 最初の文字を大文字にしないでください。
- 最後にドット(.)をつけないでください。

### 本体

変更が単純な場合は、Bodyはオプションです。

ヘッダーと同様に、"changed"でも"changes"でもなく、"change"という命令現在形を使用します。
ボディには、変更の動機を含め、これを以前の行動と比較する必要があります。

### フッター

フッターは、このコミットが**クローズ**するGitHubイシューを参照する場所です。

コミットで参照された懸案事項を自動的にクローズするために[GitHubキーワード](https://help.github.com/articles/closing-issues-via-commit-messages)
を使用する必要があります。

### 例

たとえば、次のような適切なコミットメッセージが表示されます。

```
upgrade to Spring Boot 1.1.7 (Spring Boot 1.1.7にアップグレードする)

upgrade the Maven and Gradle builds to use the new Spring Boot 1.1.7,
see http://spring.io/blog/2014/09/26/spring-boot-1-1-7-released （MavenとGradleのビルドをアップグレードして、新しいSpring Boot 1.1.7を使用する。http://spring.io/blog/2014/09/26/spring-boot-1-1-7-released を参照）

Fix #1234 （#1234の修正）
```

### 定期的なコントリビュータのガイドライン

これらは、あなたがプロジェクトに定期的に貢献している場合、
または[JHipsterチーム](https://www.JHipster.tech/team/)に参加している場合に強調したいガイドラインの一部です。

- メインに直接コミットするのではなく、常にPRを通じて変更を送信することをお勧めします。
- マージする前に、PRに関するレビューを少なくとも1つ取得してください。
- 作成した問題およびPRに適切なラベルを追加します（追加する権限がある場合）。
- プロジェクトの[ポリシー](https://www.jhipster.tech/policies/#-policies)に従います。
- プロジェクトの[行動基準](https://github.com/jhipster/generator-jhipster/blob/main/CODE_OF_CONDUCT.md)に従います。
  また、質問やバグレポートに答えたり、PRをレビューしたりするときには、ユーザーに対して礼儀正しく、役に立つようにしてください。
- 私たちは自由な時間に仕事をしているので、義務もコミットメントもありません。仕事と生活のバランスは重要なので、
何かを修正するために自由な時間をすべて費やさないでください。

[issue-template]: https://github.com/jhipster/generator-jhipster/issues/new?template=BUG_REPORT.md
[feature-template]: https://github.com/jhipster/generator-jhipster/issues/new?template=FEATURE_REQUEST.md
