import ContentLoader from "react-content-loader";

export const ImageGrid = (props) => (
  <ContentLoader
    width={800}
    height={575}
    viewBox="0 0 800 575"
    backgroundColor="#999999"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
    <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
    <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
    <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
    <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
    <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
    <circle cx="286" cy="536" r="12" />
    <circle cx="319" cy="535" r="12" />
    <circle cx="353" cy="535" r="12" />
    <rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
    <rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
    <circle cx="210" cy="535" r="12" />
    <circle cx="428" cy="536" r="12" />
  </ContentLoader>
);

export const MyLoader = (props) => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
);
