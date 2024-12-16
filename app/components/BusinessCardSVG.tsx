const BusinessCardSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800"
    height="400"
    viewBox="0 0 400 200"
    style={{
      backgroundColor: "gray",
      border: "1px solid #ccc",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <rect width="400" height="200" fill="#f7f0f0" />

    <text
      x="15"
      y="30"
      fontSize="25"
      fill="#a3bce6"
      fontFamily="Georgia, serif"
      fontWeight="bold"
    >
      TOKYO
    </text>
    <text x="15" y="50" fontSize="18" fill="#a3bce6" fontWeight="bold">
      ENGINEERING
    </text>

    <text x="170" y="65" fontSize="11" fill="#545a63">
      代表取締役社長
    </text>

    <text x="170" y="90" fontSize="15" fill="#545a63" fontWeight="semibold">
      <tspan>田</tspan>
      <tspan dx="10">中</tspan>
      <tspan dx="40">宏</tspan>
    </text>

    <text x="170" y="138" fontSize="10" fill="#545a63">
      東京エンジニアリング株式会社
    </text>

    <text x="170" y="148" fontSize="10" fill="#545a63">
      〒103-2044 東京都朝日区2-1-29
    </text>

    <text x="190" y="160" fontSize="10" fill="#545a63">
      PHONE (03) 1055-8141 (代)
    </text>

    <text x="190" y="172" fontSize="10" fill="#545a63">
      FAX (03) 1055-8149
    </text>
  </svg>
);

export default BusinessCardSVG;
