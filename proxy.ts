import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/MEYERS-Premium-Scented-Diffuser-warmer/dp/B0FPGT6QHJ?th=1&linkCode=ll2&tag=aromastacker-20&linkId=52596d830a698252663dc5f7d3620964&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ASAKUKI-Essential-Ultrasonic-Aromatherapy-Humidifier/dp/B01MR4Y0CZ?th=1&linkCode=ll2&tag=aromastacker-20&linkId=e0abca9a19cefc5b42895eb9fed2f05e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Drift-Home-Scent-Diffuser-Starter/dp/B0DP7F137W?th=1&linkCode=ll2&tag=aromastacker-20&linkId=195a512801ce2f3fa5a46b2feb41afef&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Essential-Ultrasonic-Aromatherapy-Humidifier-Minimalist/dp/B0D66B75R7?th=1&linkCode=ll2&tag=aromastacker-20&linkId=30a32945e1879b46b5e1175ec1d107ed&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/InnoGear-Aromatherapy-Essential-Ultrasonic-Humidifier/dp/B00V9JP8EE?th=1&linkCode=ll2&tag=aromastacker-20&linkId=d22c570f4042aae2d2b378d0925cac5b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bath-Body-Works-Mahogany-Intensity/dp/B01M7TTA2S?th=1&linkCode=ll2&tag=aromastacker-20&linkId=ad801cc2e9fdda62f588b2a54355f2d6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Chesapeake-Bay-Candle-Serenity-Lavender/dp/B07GH691SM?th=1&linkCode=ll2&tag=aromastacker-20&linkId=2b8509e24231cca57905d27c71d2d1a7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Yankee-Candle-Scented-Consistent-Fragrance/dp/B0F3DQK6YY?th=1&linkCode=ll2&tag=aromastacker-20&linkId=6026127c54c6ddd7450e3ec4ae48477c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Capri-Blue-Volcano-Candle-503/dp/B000YBFJQU?th=1&linkCode=ll2&tag=aromastacker-20&linkId=75a746fb41f16a48abd8f4b6a6f376b1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Jasmine-Sandal-Luxury-Scented-Lasting/dp/B07J5S5Z9D?th=1&linkCode=ll2&tag=aromastacker-20&linkId=bcbf8fc191aa929a09348fe70553b1e7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Majestic-Pure-Lavender-Therapeutic-Essential/dp/B00TSTZQEY?th=1&linkCode=ll2&tag=aromastacker-20&linkId=c667f1602cb379d9673f8170a5fb9ded&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Handcraft-Eucalyptus-Essential-Oil-Therapeutic/dp/B0757Y3MF9?th=1&linkCode=ll2&tag=aromastacker-20&linkId=44e6ab463d812b60fff819a4bb1269b8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Lagunamoon-Essential-Diffuser-Humidifier-Aromatherapy/dp/B06XRPG669?th=1&linkCode=ll2&tag=aromastacker-20&linkId=397e79ec9dd41425508f7a5dd38ea822&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wtrcsv-Essential-Oils-Set-Aromatherapy/dp/B0F18RY1FR?&linkCode=ll2&tag=aromastacker-20&linkId=01e06aafd3510bb0fa7375026ed7a993&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ASAKUKI-Essential-Set-Aromatherapy-Humidifier/dp/B09CGZC3PW?th=1&linkCode=ll2&tag=aromastacker-20&linkId=740a8e28cb3175d3b2151f8f59b3866d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cocorr%C3%ADna-Diffuser-Fragrance-Essential-Bathroom/dp/B0B24QJ217?th=1&linkCode=ll2&tag=aromastacker-20&linkId=43fcf2167cabe3cc1c0e106dcb73af0e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Airkeep-Reed-Diffuser-Set-3-38/dp/B0CMQRVRFF?th=1&linkCode=ll2&tag=aromastacker-20&linkId=8635fda5ea0acac1e422fdd5b23ea660&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cocodor-Flower-Diffuser-200ml-Jasmine/dp/B0848JGM78?th=1&linkCode=ll2&tag=aromastacker-20&linkId=0f17d0e4ddd3d0c50cad6e089463098d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Diffusers-Diffuser-Freshener-Fragrance-Aromatherapy/dp/B09SFZJM67?th=1&linkCode=ll2&tag=aromastacker-20&linkId=17c2169434ef18fcc3263fcdaf020b37&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Diffuser-Eucalyptus-Accessories-Fresheners-Essential/dp/B0BHWC6N41?th=1&linkCode=ll2&tag=aromastacker-20&linkId=a96b37675d5e82038621e4abba32dcad&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Innqoo-Dimmable-Candles-Adjustable-Birthday/dp/B0DZFGTCLR?th=1&linkCode=ll2&tag=aromastacker-20&linkId=ae6ff77662cf198313e194db61cb25b9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/GODONLIF-Candle-Adjustable-Dimmable-Candles/dp/B0CTJGJL2T?th=1&linkCode=ll2&tag=aromastacker-20&linkId=fee5b1c3f5f07da6cb688416bed9a6e1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Candle-Warmer-Lamp-Electric-Timer/dp/B0DT9QTQ4S?th=1&linkCode=ll2&tag=aromastacker-20&linkId=465fbd2c1f851832421f2d682ab0bae7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/UCC-Natural-Fragrance-Lasting-Premium/dp/B0D8NQ5161?th=1&linkCode=ll2&tag=aromastacker-20&linkId=0e68188343bf1dfa18ef01e3ede5fdd5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Yankee-Candle-Midsummers-Night-Melts/dp/B08XKLNDTC?th=1&linkCode=ll2&tag=aromastacker-20&linkId=158470dedfa34ad01086e503616b3bdc&language=en_US&ref_=as_li_ss_tl',
]

const amazonLinks2 = [
  'https://www.amazon.com/Febreze-Freshener-Eliminator-Scented-Refill/dp/B08492PZ8Y?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=ff6d6ce50fdd7eb20e56a8e35a3e687c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Febreze-Freshener-Eliminator-Scented-Original/dp/B08492F6Y9?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=265a9c3d1397b5f0035f352826814bd2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Yankee-Candle-Consistent-Fragrance-Midsummers/dp/B0F3DQSZKT?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=d09ba54c3f6f99cf85cda828e746cad6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Yankee-Candle-Scented-Consistent-Fragrance/dp/B0F3DQPLSP?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=ac37f3e53a500fe188c69f0dd1d39052&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Majestic-Pure-Peppermint-Essential-Therapeutic/dp/B00PV15BPW?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=1628f476ee604c3d580d1571183cc320&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/JUABA-Peppermint-Natural-Aromatherapy-Diffuser/dp/B0FF4D2T64?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=1a3207810bc41a4e7e635bd5556006fa&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/seenlast-Adjustable-Electric-Vintage-Scented/dp/B0CDRDK6MR?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=78d7505ea2d503de38f4400a83e724f6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Candle-Warmer-Birthday-Warming-Apartment/dp/B0FRLWC6X9?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=5f7cb48f7c40a08868c0d4decd0f6d65&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Glade-PlugIns-Scented-Freshener-Electric/dp/B011JA1NXM?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=a17e65db002514fdfa69d245baacf652&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Glade-PlugIns-Scented-Freshener-Refills/dp/B07G3YXPXQ?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=cfd3598e99acb16f4a3f9c3f3a813d4d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Febreze-Freshener-Eliminator-Scented-Hawaiian/dp/B08492LXZP?&linkCode=ll2&tag=aromastacker2-20&linkId=0f8df3c59597af32fe2c457537bc151d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Coleman-Scented-Citronella-Candle-Crackle/dp/B00PNBU3AS?th=1&linkCode=ll2&tag=aromastacker2-20&linkId=04054809a24cda615e6cdec1f91f63c0&language=en_US&ref_=as_li_ss_tl',
]


export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'aroma'
  const cookieName2 = 'aroma2'

   // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)
    const redirectFlag2 = request.cookies.get(cookieName2)

    if (redirectFlag) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)]
      //проверить url.search и удалить все параметры, оставить только utm_source
      const params = new URLSearchParams(url.search)
      const utmSource = params.get('utm_source')
      url.search = utmSource ? `?utm_source=${utmSource}` : ''


      // передавай в редирект URL и query параметры
      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
    else if (redirectFlag2) {
      const randomUrl = amazonLinks2[Math.floor(Math.random() * amazonLinks2.length)]
      const params = new URLSearchParams(url.search)
      const utmSource = params.get('utm_source')
      url.search = utmSource ? `?utm_source=${utmSource}` : ''

      const response = NextResponse.redirect(randomUrl)

      response.cookies.set(cookieName2, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }

  return NextResponse.next()
  }
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}

