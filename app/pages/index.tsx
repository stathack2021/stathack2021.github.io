import Head from 'next/head'
import Image from 'next/image'

export const Home = (): JSX.Element => (
  <div class="bg-black">
    <Head>
      <title>StatHack(スタットハック)| 最先端の AI 開発・コンサルティング</title>
      <link rel="icon" href="/favicon.svg" />
      <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet'></link>
      <script src="https://sdk.form.run/js/v2/formrun.js"></script>
    </Head>

    <header class="text-white body-font bg-fv bg-no-repeat bg-cover bg-center w-screen" style={{height: "90vh"}}>
      <div class="container mx-auto flex flex-wrap py-16 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/images/logo_white.svg" alt="Vercel Logo" height={'64'} width={'300'} />
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-xl justify-center font-en">
          <a class="mr-5 hover:text-blue-400" href="/#about">ABOUT US</a>
          <a class="mr-5 hover:text-blue-400" href="/#value">VALUE</a>
          <a class="mr-5 hover:text-blue-400" href="/#service">SERVICE</a>
          <a class="mr-5 hover:text-blue-400" href="/#member">MEMBER</a>
          <a class="mr-5 hover:text-blue-400" href="/#company">COMPANY</a>
          <a class="mr-5 hover:text-blue-400" href="/#contact">CONTACT</a>
        </nav>
      </div>
    </header>

    <section class="text-white body-font bg-about" id="about">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h1 class="text-7xl text-white font-en font-semibold title-font mb-2 md:w-2/5">
            <span class="text-lg font-jp font-bold">私たちについて</span><br/>
            ABOUT US
          </h1>
          <div class="md:w-3/5 md:pl-6 font-jp font-medium">
            <h2 class="text-4xl py-5">“データを原動力に社会を次の時代へ”</h2>
            <p class="leading-relaxed text-base text-2xl mt-5">
            StatHack (スタットハック) は、AI や Deep Learning を主軸とした最先端技術を用いて、
            ビジネスの質や効率をさらに高めるテクニックを提供します。<br/>
            私たちはお客様が抱える多種多様な課題と真摯に向き合うことを通し、<br/>
            社会全体をビッグデータに支えられたより豊かな時代へと推し進めます。
            </p>
            <a class="mix-blend-overlay">
              <Image src="/images/logo_white.svg" alt="Logo" height={'140'} width={'700'} />
            </a>
          </div>
        </div>
    </section>

    <section class="text-white body-font bg-value bg-no-repeat bg-cover" id="value">
      <div class="container px-5 py-36 mx-auto">
        <div class="text-center mb-20">
          <h1 class="text-6xl font-en font-semibold title-font text-white mb-4">
            <span class="text-lg font-jp font-bold">バリュー</span><br/>
            VALUE
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="flex-grow px-16">
              <div class="text-whitetitle-font font-medium mb-3 flex flex-wrap items-center border-b border-sh-blue">
                <div class="w-1/4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue via-sh-blue to-sh-dark-blue">
                  <span class="text-base font-en font-semibold">value</span><br/>
                  <span class="text-6xl font-en font-semibold">01</span>
                </div>
                <div class="w-3/4 text-2xl font-jp font-medium">ビジネス課題に<br />真摯に向き合う</div>
              </div>
              <p class="leading-relaxed font-jp font-medium text-base text-left">
                私たちは、お客様それぞれの持つビジネス課題やデータに対し、個々の特性を加味した最適なソリューションを真摯に求め続けます。
              </p>
            </div>
          </div>

          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="flex-grow px-16">
              <div class="text-whitetitle-font font-medium mb-3 flex flex-wrap items-center border-b border-sh-blue">
                <div class="w-1/4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue via-sh-blue to-sh-dark-blue">
                  <span class="text-base font-en font-semibold">value</span><br/>
                  <span class="text-6xl font-en font-semibold">02</span>
                </div>
                <div class="w-3/4 text-2xl font-jp font-medium">最先端技術を<br/>社会に実装する</div>
              </div>
              <p class="leading-relaxed font-jp font-medium text-base text-left">
              私たちは、機械学習分野の最前線で研究開発を続けます。その中で培われた最先端の技術を結集してお客様により質の高いサービスを提供します。
              </p>
            </div>
          </div>

          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="flex-grow px-16">
              <div class="text-whitetitle-font font-medium mb-3 flex flex-wrap items-center border-b border-sh-blue">
                <div class="w-1/4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue via-sh-blue to-sh-dark-blue">
                  <span class="text-base font-en font-semibold">value</span><br/>
                  <span class="text-6xl font-en font-semibold">03</span>
                </div>
                <div class="w-3/4 text-2xl font-jp font-medium">常に学びを得て<br/>向上し続ける</div>
              </div>
              <p class="leading-relaxed font-jp font-medium text-base text-left">
                私たちは、急速に変化し続ける時代の中で常に向上し続けます。貪欲に学びを求め、お客様のさらなる成果へとつなげる機会を逃しません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-white body-font" id="service">
      <div class="py-4 bg-sh-gray shadow-lg rounded-lg my-20 mx-auto mx-20">
        <div class="text-center mb-20">
          <h1 class="text-6xl font-en font-semibold title-font mb-4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">
            <span class="text-lg font-jp font-bold">事業概要</span><br/>
            SERVICE
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>

          <div class="font-jp font-medium text-sh-black text-center">
            <h2 class="text-4xl py-5">AI ソリューション事業</h2>
            <p class="leading-relaxed text-base text-2xl mt-5">
              StatHack では、データの有効活用によるお客様の成果の更なる向上をもたらす AI ソリューションを提供します。<br/>
              AI 技術導入の検討段階でのご相談から開発、導入、運用支援まで、お客様をサポートさせていただきます。
            </p>
          </div>
        
        
        <div class="container px-5 mx-auto text-sh-black">
          
          <div class="flex items-top lg:w-4/5 mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
            <div class="inline-flex items-center justify-center">
              <Image src="/images/ex1.png" alt="example_1" width={'352'} height={'300'} />
            </div>
            <div class="flex-grow text-left ml-20 mt-6 pt-40 w-20">
              <p class="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 01</p>
              <h2 class="text-4xl py-2">コンピュータビジョン</h2>
              <p class="leading-relaxed text-base font-jp font-medium">
                CV、画像分析<br />
                コンピュータビジョンは、コンピュータにより人間に近い認知方法で画像や動画を処理することを目指す分野です。深層学習の技術の発展と共に最も大きく成長してきた分野であり、現在では様々なタスクにおいて人間を超える精度を記録するほどに成熟しています。
              </p>

              <div class="flex flex-wrap -mx-4 -mb-10 my-5 md:space-y-0 space-y-6">
                <div class="p-4 md:w-1/2 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search w-6 h-6" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </div>
                  <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 font-jp text-lg title-font font-bold mb-2">物体認識</h2>
                    <p class="leading-relaxed text-base font-jp font-medium">
                    画像中の特定要素を抽出・認識することができます。画像中に含まれる特定要素の数え上げや異常物の検知などに利用されます。  
                    </p>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film w-6 h-6" viewBox="0 0 16 16">
                      <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                    </svg>
                  </div>
                  <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 text-lg title-font font-jp font-bold mb-2">動画予測</h2>
                    <p class="leading-relaxed text-base font-jp font-medium">
                    ある時刻までの動画情報から次時刻の予測をします。たとえば、ある時刻の天気図から次時刻の雲の動きの予測などを行うことができます。  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-top lg:w-4/5 mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow text-left mr-20 mt-6 pt-40 w-20">
              <p class="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 02</p>
              <h2 class="text-4xl py-2">自然言語処理</h2>
              <p class="leading-relaxed text-base font-jp font-medium">
                NLP、テキスト分析<br />
                自然言語処理は、コンピュータにより人間が日常使う言語（自然言語）から情報を抽出し処理することを目指す分野です。人間の高度な情報処理に密接にかかわるため難しい分野であるとされてきましたが、近年では新たなモデルの登場などにより目覚ましい発展を遂げています。
              </p>

              <div class="flex flex-wrap -mx-4 -mb-10 my-5 md:space-y-0 space-y-6">
                <div class="p-4 md:w-1/2 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text w-6 h-6" viewBox="0 0 16 16">
                      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                  </div>
                  <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 text-lg title-font font-jp font-bold mb-2">文書埋め込み</h2>
                    <p class="leading-relaxed text-base font-jp font-medium">
                    テキストデータを定量化し、類似性や関係性を分析します。文書検索システムやSNSなどの評判分析システムなどに応用されます。  
                    </p>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text w-6 h-6" viewBox="0 0 16 16">
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                      <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  </div>
                  <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 text-lg title-font font-jp font-bold mb-2">対話システム</h2>
                    <p class="leading-relaxed text-base font-jp font-medium">
                    テキストに対して自然に応答するシステムを構築します。カスタマーサポートの自動化などに利用できます。  
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-flex items-center justify-center">
              <Image src="/images/ex2.png" alt="example_2" width={'352'} height={'300'} />
            </div>
          </div>

          <div class="flex items-top lg:w-4/5 mx-auto border-b pb-10 mb-20 border-gray-200 sm:flex-row flex-col">
            <div class="inline-flex items-center justify-center">
              <Image src="/images/ex3.png" alt="example_3" width={'352'} height={'300'} />
            </div>
            <div class="flex-grow text-left ml-20 mt-6 pt-40 w-20">
              <p class="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 03</p>
              <h2 class="text-4xl py-2">その他データ分析</h2>
              <p class="leading-relaxed text-base font-jp font-medium">
                数値で表されるデータ全般<br />
                上記の画像・テキストデータに限らず、数値で表すことのできるデータであれば機械学習の対象となります。弊社ではお客様の持っていらっしゃるデータを有効に活用できる方法を提案いたしますので、お気軽にご相談ください。
              </p>

              <div class="flex flex-wrap -mx-4 -mb-10 my-5 md:space-y-0 space-y-6">
                <div class="p-4 md:w-1/2 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line w-6 h-6" viewBox="0 0 16 16">
                      <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                    </svg>
                  </div>
                  <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 font-jp text-lg title-font font-bold mb-2">購買データ分析による売上最適化</h2>
                    <p class="leading-relaxed text-base font-jp font-medium">
                    これまでの商品の売上数のデータをもとに需要を予測し、最適な仕入れや在庫をAIによって提案します。  
                    </p>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wifi w-6 h-6" viewBox="0 0 16 16">
                      <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                      <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                    </svg>
                  </div>
                  <div class="flex-grow pl-6">
                    <h2 class="text-gray-900 text-lg title-font font-jp font-bold mb-2">センサーを用いた予測</h2>
                    <p class="leading-relaxed text-base font-jp font-medium">
                    工場の熱感知センサーなどのセンサーデータをもとに異常を検知したり、数分後に起こりうる異常を予測したりするシステムを構築します。  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="text-white body-font bg-member bg-no-repeat bg-cover" id="member">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="text-6xl font-en font-semibold title-font text-white mb-4">
            <span class="text-lg font-jp font-bold">役員紹介</span><br/>
            MEMBER
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4 font-jp font-medium">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/rmatsuba.jpg"/>
              <p class="text-gray-100">CEO</p>
              <h2 class="text-white font-medium title-font tracking-wider text-4xl">松葉 亮人</h2>
              <p class="text-gray-100">Ryoto Matsuba</p>
              <span class="inline-block h-1 w-10 rounded bg-sh-blue mt-6 mb-4"></span>
              <p class="leading-relaxed px-24 text-left">
                早稲田大学先進理工学部 所属。<br/>
                松尾研究所の共同研究プロジェクトに参加し、
                前職のAIスタートアップでは製品開発を主導した。
              </p>
            </div>
          </div>

          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/tinoue.jpg"/>
              <p class="text-gray-100">取締役</p>
              <h2 class="text-white font-medium title-font tracking-wider text-4xl">井上 智裕</h2>
              <p class="text-gray-100">Tomohiro Inoue</p>
              <span class="inline-block h-1 w-10 rounded bg-sh-blue mt-6 mb-4"></span>
              <p class="leading-relaxed px-24 text-left">
                早稲田大学先進理工学部 所属。<br/>
                ハッカソンでの最優秀賞受賞、大学講義への教材アプリの提供など開発経験多数。
              </p>
            </div>
          </div>

          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/kmurata.jpg"/>
              <p class="text-gray-100">取締役</p>
              <h2 class="text-white font-medium title-font tracking-wider text-4xl">村田 健</h2>
              <p class="text-gray-100">Ken Murata</p>
              <span class="inline-block h-1 w-10 rounded bg-sh-blue mt-6 mb-4"></span>
              <p class="leading-relaxed px-24 text-left">
                東京大学工学系研究科技術経営戦略専攻 所属。
                松尾研究所の共同研究プロジェクトに参加。
                AIスタートアップでWebアプリや画像処理の実務経験多数。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <section class="text-gray-600 body-font bg-sh-white" id="company">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="text-6xl font-semibold font-en title-font text-sh-black mb-4">
            <span class="text-lg font-bold font-jp">会社概要</span><br/>
            COMPANY
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>
        <div class="mx-auto p-4 font-jp font-medium text-sh-black">
          <div class="h-full bg-sh-gray2 p-8 rounded">
            <div class="flex flex-wrap divide-x divide-sh-gray3">
              <div class="w-1/2 px-20 py-6">
                <table class="w-full h-full">
                  <tbody>
                    <tr>
                      <td>会社名</td>
                      <td>株式会社StatHack</td>
                    </tr>
                    <tr>
                      <td>所在地</td>
                      <td>〒113-0033<br/>東京都文京区本郷6丁目25番14号</td>
                    </tr>
                    <tr>
                      <td>設立年月日</td>
                      <td>2021年8月25日</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="w-1/2 px-20 py-6">
                <table class="w-full h-full">
                  <tbody>
                    <tr>
                      <td>役員</td>
                    </tr>
                    <tr>
                      <td>代表取締役CEO</td>
                      <td>松葉 亮人</td>
                    </tr>
                    <tr>
                      <td>取締役</td>
                      <td>井上 智裕</td>
                    </tr>
                    <tr>
                      <td>取締役</td>
                      <td>村田 健</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="text-gray-600 body-font relative bg-contact bg-no-repeat bg-cover" id="contact">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="text-6xl font-en font-semibold title-font text-white mb-4">
            <span class="text-lg font-jp font-bold">お問い合わせ</span><br/>
            CONTACT
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>
        <form class="lg:w-1/2 md:w-2/3 mx-auto text-white font-jp font-bold formrun" action="https://form.run/api/v1/r/qi9kpkwk5dxyj7b7x3g12k8v" method="post">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
              <div class="relative">
                <label for="company" class="leading-7 text-sm">会社名または組織名</label>
                <input type="text" id="company" name="会社名または組織名" class="w-full bg-sh-gray4 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-sh-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="name" class="leading-7 text-sm">お名前[必須]</label>
                <input type="text" id="name" name="お名前" data-formrun-required class="w-full bg-sh-gray4 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <div data-formrun-show-if-error="お名前">お名前を入力してください</div>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="email" class="leading-7 text-sm">連絡先メールアドレス[必須]</label>
                <input type="email" id="email" name="メールアドレス" data-formrun-type="email" data-formrun-required class="w-full bg-sh-gray4 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm">お問い合わせ内容[必須]</label>
                <textarea id="message" name="お問い合わせ内容" data-formrun-required class="w-full bg-sh-gray4 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-64 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                <div data-formrun-show-if-error="お問い合わせ内容">お問い合わせ内容を入力してください</div>
              </div>
            </div>
            <div class="p-2 w-full mt-10">
              <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..." class="flex mx-auto w-96 h-16 items-center justify-center font-bold text-white bg-gradient-to-l from-sh-light-blue  via-sh-blue to-sh-dark-blue hover:bg-gradient-to-l hover:from-sh-light-blue-hover  hover:via-sh-blue-hover hover:to-sh-dark-blue-hover  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">送信</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <footer class="text-gray-600 body-font font-en">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/images/logo_white.svg" alt="Vercel Logo" height={'64'} width={'200'} />
          </a>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center text-white">
          <a class="mr-5 hover:text-blue-400" href="/#about">ABOUT US</a>
          <a class="mr-5 hover:text-blue-400" href="/#value">VALUE</a>
          <a class="mr-5 hover:text-blue-400" href="/#service">SERVICE</a>
          <a class="mr-5 hover:text-blue-400" href="/#member">MEMBER</a>
          <a class="mr-5 hover:text-blue-400" href="/#company">COMPANY</a>
          <a class="mr-5 hover:text-blue-400" href="/#contact">CONTACT</a>
          <a class="mr-5 hover:text-blue-400" href="https://docs.google.com/document/d/1aLZxMF1pQr3nnX0IiREiA21fhIzKYtEQ/edit?usp=sharing&ouid=103723920923670350704&rtpof=true&sd=true">PRIVACY POLICY</a>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 StatHack, inc.</p>
          {/* SNS
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span> 
          */}
        </div>
      </div>
    </footer>
  </div>
)

export default Home