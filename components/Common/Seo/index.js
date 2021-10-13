import { DefaultSeo, NextSeo } from "next-seo";

export function CommonSeo() {
  const CommonSeoData = {
    keywords: `홈페이지 제작, 반응형 홈페이지,명품 홈페이지, 온라인 비지니스, 모바일 홈페이지, 수익형 홈페이지, 온라인 브랜딩, 온라인 마케팅, SEO, SSL, 
    홈페이지 만들기, 맞춤 홈페이지`,
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/images/seo-banner/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/images/seo-banner/apple-icon-76x76.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon",
        href: "/images/seo-banner/apple-icon-120x120.jpg",
        sizes: "120x120",
      },
    ],
    additionalMetaTags: [
      {
        name: "application-name",
        content: "홈페이지 제작 YY AGENCY",
      },
      {
        name: "msapplication-tooltip",
        content: "YY AGENCY",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],

    twitter: {
      handle: "@handle",
      site: "mindcarecenter.org",
      cardType: "summary_large_image",
    },
  };
  return <DefaultSeo {...CommonSeoData} />;
}

export function IndexSeo() {
  const indexSeoData = {
    canonical: "https://www.yyagency.co.kr/",
    title: "명품 반응형 홈페이지 제작 에이전시  - YY AGENCY",
    description:
      "앞선 기술력을 가지고 합리적인 맞춤 홈페이지 제작을 진행하는 YY AGENCY입니다.",

    openGraph: {
      type: "website",
      title:
        "수익, 브랜딩, 마케팅까진 꽉 잡아서 명품 홈페이지를 만드는 에이전시 - YY AGENCY",
      description: `온라인 비지니스를 하다 보면 막막하고 어려운 홈페이제 제작 부터 유지, 보수, 온라인 퍼포먼스 마케팅을 한번에 해결 할 수 있는 홈페이지 제작 에이전시입니다..`,
      url: "https://www.yyagency.co.kr/",
      images: [
        {
          url: "https://www.yyagency.co.kr//images/seo-bannertwi001t2689493_l (1).jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...indexSeoData} />;
}

export function AboutSeo() {
  const aboutSeoData = {
    canonical: "https://www.yyagency.co.kr//about",
    title: "명품 홈페이지 제작 에전시 - YY AGENCY 소개",
    description:
      "홈페이지 제작에 필요한 최신 기술 NextJs, React, Javascript 등등 앞선 기술력을 지닌 YY AGENCY입니다.",

    openGraph: {
      type: "website",
      title: "비지니스의 기틀을 위한 - YY AGENCY 소개",
      description: `홈페이지는 비지니스의 첫인상입니다. 퀄리티가 좋은 홈페이지는 모바일과 웹에서도 최적화 되어 호환이되고 대표님께서 꼭 필요한 기능을 가지고 있어야합니다.`,
      url: "https://www.yyagency.co.kr//about",
      images: [
        {
          url: "https://www.yyagency.co.kr//images/seo-banner/tip014t012590.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...aboutSeoData} />;
}

export function ServicesSeo() {
  const ReservationSeoData = {
    canonical: "https://www.yyagency.co.kr//services",
    title: "YY AGENCY가 제공하는 서비스 - YY AGENCY 서비스",
    description:
      "반응형 웹페이지,SEO, SSL,Google AD, Naver파워링크 세팅, 로얄키워드 등록, 포털사이트 사이트 등록, 마케팅 &amp; 홈페이지 유지 보수 관리 교육, 고객님들의 인적 네트워크 제공을 합니다 .",
    openGraph: {
      type: "website",
      title: "비지니스 확장 혹은 새로운 비지니스를 하고 싶다면? - YY AGENCY 예약",
      description: `저희는 여러분의 온라인 비지니스를 저희의 일처럼 성실하게 좋은 퀄리티로 만들어 드리는 파트너입니다.`,
      url: "https://www.yyagency.co.kr//services",
      images: [
        {
          url: "https://www.yyagency.co.kr//images/seo-banner/tip114t002503.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...ServicesSeoData} />;
}

export function PortfolioSeo() {
  const CounsellingSeoData = {
    canonical: "https://www.yyagency.co.kr//portfolio",
    title: "철저한 맞춤 심리상담을 위한 상담신청작성 - YY AGENCY",
    description:
      "YY AGENCY는 내담자 한 분, 한 분의 이야기를 주의깊게 듣고 철저한 맞춤형 상담이 이루어지고 있습니다. 상당 전 신청내용을 바탕으로 저희만의 MCI 진단을 통해 상담에 들어가게 됩니다.",

    openGraph: {
      type: "website",
      title: "신뢰 할 수 있는 홈페이지 제작을 위한 포토폴리오 - YY AGENCY",
      description: `YY AGENCY는 대표님들의 비지니스 성공을 위해 수익형, 반응형, 홍보형 등의 다양한 종류의 홈페이지를 제공합니다.`,
      url: "https://www.yyagency.co.kr//portfolio",
      images: [
        {
          url: "https://www.yyagency.co.kr//images/seo-banner/tip114t002503.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...PortfolioSeoData} />;
}

export function ContactSeo() {
  const NoticeSeoData = {
    canonical: "https://www.yyagency.co.kr//contact",
    title:
      "홈페이지 제작 문의 및 회원사 가입 문의 | 홈페이지 제작 에이전시 YY AGENCY",
    description: "홈페이지 제작 및 회원사 가입을 위한 연락처",

    openGraph: {
      type: "website",
      title:
        "홈페이지 제작 문의 및 회원사 가입 문의 | 홈페이지 제작 에이전시 YY AGENCY",
      description: `AM 10:00~ PM 6:00 전화및 카카오톡 상담 가능, 그외에 시간 채널톡 상담이 가능합니다.`,
      url: "https://www.yyagency.co.kr//contact",
      images: [
        {
          url: "https://www.yyagency.co.kr//images/seo-banner/123.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...ContactSeoData} />;
}

export function YakwanSeo() {
  const YakwanSeoData = {
    canonical: "https://www.yyagency.co.kr//yakwan",
    title: "약관 | 홈페이지 제작 에이전시 YY AGENCY",
    description: "홈페이지 제작 에이전시 YY AGENCY 약관",
    openGraph: {
      type: "website",
      title: "약관 | 홈페이지 제작 에이전시 YY AGENCY",
      description: `홈페이지 제작 에이전시 YY AGENCY에 약관`,
      url: "https://www.yyagency.co.kr//yakwan",
      images: [
        {
          url: "https://www.yyagency.co.kr//images/seo-bannerYYAGENCY_HOMEPAGE.png",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...YakwanSeoData} />;
}

export function PolicySeo() {
  const PolicySeoData = {
    canonical: "https://www.yyagency.co.kr//policy",
    title: "개인정보처리방침 | 홈페이지 제작 에이전시 YY AGENCY",
    description: "홈페이지 제작 에이전시 YY AGENCY 개인정보처리방침",
    openGraph: {
      type: "website",
      title: "개인정보처리방침 | 홈페이지 제작 에이전시 YY AGENCY",
      description: `홈페이지 제작 에이전시 YY AGENCY에 개인정보처리방침`,
      url: "https://www.yyagency.co.kr//policy",
      images: [
        {
          url: "https://www.yyagency.co.kr//images/seo-bannerimg_box_04.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...PolicySeoData} />;
}