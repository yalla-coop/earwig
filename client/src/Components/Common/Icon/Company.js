import React from "react";

const Company = props => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" height={props.height}
  width={props.width}
  {...props}>
  <path d="M54 46.051v-.572c2.441-2.019 4-5.07 4-8.479h2v-2h-2.191c-.944-5.112-5.427-9-10.809-9-.142 0-.279.016-.419.021-1.626-2.809-4.422-4.63-7.581-4.951v-.592c2.441-2.019 4-5.07 4-8.479h2v-2h-2.191C41.865 4.888 37.382 1 32 1s-9.865 3.888-10.809 9H19v2h2c0 3.408 1.559 6.459 4 8.479v.592c-3.159.321-5.955 2.142-7.581 4.951-.14-.006-.277-.022-.419-.022-5.382 0-9.865 3.888-10.809 9H4v2h2c0 3.408 1.559 6.459 4 8.479v.572c-5.046.507-9 4.803-9 10.013V63h62v-6.936c0-5.21-3.954-9.506-9-10.013zM14 57H8v-2h4v-.024a4.95 4.95 0 0 0 2 .923zm-2-10v-.214c1.502.77 3.199 1.214 5 1.214s3.498-.444 5-1.214v1.01c-.236.462-1.37 2.204-5 2.204-3.631 0-4.754-1.717-5-2.206zm12.107-15.502C22.859 32.176 22 33.483 22 35h-2v-6.475a9.022 9.022 0 0 1 4.107 2.973zm1.039 1.701c.268.571.479 1.173.622 1.801H24c0-.796.471-1.48 1.146-1.801zM25.479 30H27v-.024a4.95 4.95 0 0 0 2 .923V35h-1.191a10.953 10.953 0 0 0-2.33-5zM27 21.786c1.502.77 3.199 1.214 5 1.214s3.498-.444 5-1.214v1.01c-.236.462-1.37 2.204-5 2.204-3.631 0-4.754-1.717-5-2.206V22zM42 35c0-1.517-.859-2.824-2.107-3.502A9.017 9.017 0 0 1 44 28.525V35zm-12-6c-1.654 0-3-1.346-3-3v-.344c1.057.727 2.641 1.344 5 1.344s3.943-.617 5-1.344V26c0 1.654-1.346 3-3 3h-1v6h-2v-6zm5 1.899a4.95 4.95 0 0 0 2-.923V30h1.521a10.953 10.953 0 0 0-2.33 5H35zm3.854 2.3A1.997 1.997 0 0 1 40 35h-1.768c.143-.628.354-1.23.622-1.801zM40.695 28h-2.131A4.938 4.938 0 0 0 39 26v-2.937a7.795 7.795 0 0 1 2 .54v4.189c-.103.068-.204.137-.305.208zM36 37c0 3.408 1.559 6.459 4 8.479v.572c-3.526.354-6.508 2.564-7.991 5.637-1.477-3.073-4.469-5.284-8.009-5.637v-.572c2.441-2.019 4-5.07 4-8.479zm2 11.593a7.886 7.886 0 0 1 2-.531V51c0 .714.165 1.385.436 2H38zM24 51v-2.941c.702.084 1.37.26 2 .508V53h-2.436A4.938 4.938 0 0 0 24 51zm2 4v2h-6v-1.101a4.95 4.95 0 0 0 2-.923V55zm-6 4h6v2h-6zm8-9.287c1.838 1.454 3 3.709 3 6.287h.003c0 .022-.003.042-.003.064V61h-3zm5 6.351a8.075 8.075 0 0 1 3-6.287V61h-3zM38 59h6v2h-6zm6-2h-6v-2h4v-.024a4.95 4.95 0 0 0 2 .923zm-2-10v-.214c1.502.77 3.199 1.214 5 1.214s3.498-.444 5-1.214v1.01c-.236.462-1.37 2.204-5 2.204-3.631 0-4.754-1.717-5-2.206zm14 8v2h-6v-1.101a4.95 4.95 0 0 0 2-.923V55zm0-2h-2.436A4.938 4.938 0 0 0 54 51v-2.938a7.845 7.845 0 0 1 2 .531zm-9-7c-4.963 0-9-4.038-9-9h18c0 4.962-4.037 9-9 9zm7-11c0-.796.471-1.48 1.146-1.801.268.571.479 1.173.622 1.801zm.107-3.502C52.859 32.176 52 33.483 52 35h-2v-6.475a9.022 9.022 0 0 1 4.107 2.973zM48 28.059V35h-2v-6.941c.329-.037.662-.059 1-.059s.671.022 1 .059zm-3.592-1.738a10.86 10.86 0 0 0-1.408.443v-1.946c.525.434.998.936 1.408 1.503zM40.146 8.199c.268.571.479 1.173.622 1.801H39c0-.796.471-1.48 1.146-1.801zm-1.039-1.701C37.859 7.176 37 8.483 37 10h-2V3.525a9.022 9.022 0 0 1 4.107 2.973zM33 3.059V10h-2V3.059c.329-.037.662-.059 1-.059s.671.022 1 .059zm-4 .466V10h-2c0-1.517-.859-2.824-2.107-3.502A9.022 9.022 0 0 1 29 3.525zm-5.146 4.674A1.997 1.997 0 0 1 25 10h-1.768c.143-.628.354-1.23.622-1.801zM23 12h18c0 4.962-4.037 9-9 9s-9-4.038-9-9zm2.436 16h-2.131c-.101-.071-.202-.14-.305-.208v-4.189a7.795 7.795 0 0 1 2-.54V26c0 .714.165 1.385.436 2zM21 24.818v1.946a10.918 10.918 0 0 0-1.408-.443A8.118 8.118 0 0 1 21 24.818zm-3 3.241V35h-2v-6.941c.329-.037.662-.059 1-.059s.671.022 1 .059zm-4 .466V35h-2c0-1.517-.859-2.824-2.107-3.502A9.022 9.022 0 0 1 14 28.525zm-5.146 4.674A1.997 1.997 0 0 1 10 35H8.232c.143-.628.354-1.23.622-1.801zM8 37h18c0 4.962-4.037 9-9 9s-9-4.038-9-9zm2.436 16H8v-4.407a7.886 7.886 0 0 1 2-.531V51c0 .714.165 1.385.436 2zM3 56.064a8.075 8.075 0 0 1 3-6.287V61H3zM8 61v-2h6v2zm7-7c-1.654 0-3-1.346-3-3v-.344c1.057.727 2.641 1.344 5 1.344s3.943-.617 5-1.344V51c0 1.654-1.346 3-3 3h-1v7h-2v-7zm33 7h-2v-7h-1c-1.654 0-3-1.346-3-3v-.344c1.057.727 2.641 1.344 5 1.344s3.943-.617 5-1.344V51c0 1.654-1.346 3-3 3h-1zm2-2h6v2h-6zm11 2h-3V49.777a8.074 8.074 0 0 1 3 6.287z" fill={props.color || "currentColor"} />
</svg>
);

export default Company;
