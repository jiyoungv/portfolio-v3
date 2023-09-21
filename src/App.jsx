import AppLayout from 'component/AppLayout';
import temp_img from 'asset/image/temp_img.png';

const App = () => {
  return (
    <AppLayout>
      <section className="main-section main-profile">
        <div className="common-inner">
          <div className="main-profile-area">
            박지영 <br/>
            Web Publisher <br />
            Seoul, South Korea <br/>
            jiyoungvvvvv@gmail.com <br/>
            github icon - https://github.com/jiyoungv <br/>
            linkedin icon - https://www.linkedin.com/in/지영-박-232631207/ <br/>
            Skill: HTML, CSS, SASS(SCSS), JavaScript(ES6+), React, Recoil, Redux, CSS-in-JS, Storybook, j-Query<br/>
            Experience: JSP, PHP, GIT, Gitlab, Github, Photoshop, Figma, Sketch, Asana <br/>
            자세히 + <br/>
            UI UX, 디자인에 관심 많음<br/>
            이미지 제작이 없는, 간단한 UI는 디자인 없이 퍼블 가능<br/>
            react 환경에서 API 연동도 가능<br/>
            유연하고 범용성있는 코드를 짜는 것을 목표로<br/>
          </div>
        </div>
      </section>
      <section className="main-section main-career">
        <div className="common-inner">
          <div className="main-career-area">
            <ul className="main-career-head">
              <li>company</li>
              <li>project</li>
            </ul>
            <div className="main-career-body">
              <div className="main-career-list">
                <div className="main-career-list-left">
                  <ul className="main-career-company-list">
                    <li className="list-col1">
                      <figure className="main-career-company-logo">
                        <img src={temp_img} alt="회사" />
                      </figure>
                      <p className="main-career-company-name"><a href="https://naver.com" target="_blank" rel="noreferrer">VAIV Company(icon)</a></p>
                    </li>
                    <li className="list-col2">
                      2021.03 ~ <br/>
                      (2년 7개월)
                    </li>
                    <li className="list-col3">
                      <ul className="main-career-desc-list">
                        <li>23.03 책임 진급</li>
                        <li>22.07 ~ AI사업부문 신기술사업팀 소속</li>
                        <li>22.12 ~ AI사업부문 신기술사업팀 전사지원셀장</li>
                        <li>22.12 ~ 23.06 AI사업부문 기술전략팀(이전 명칭) BX그룹장</li>
                        <li>21.03 ~ 22.06 썸트렌드부문 UIUX팀 소속</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="main-career-list-right">
                  <ul className="main-career-project-list">
                    <li className="list-col1">
                      VAIV Bio-discovery 신규 구축
                      <ul className="main-career-device-list">
                        <li>PC</li>
                        <li className="type2">MO</li>
                        <li className="type3">Responsive</li>
                      </ul>
                    </li>
                    <li className="list-col2">
                      <ul className="main-career-link-list">
                        <li>
                          <a href="https://naver.com" target="_blank" rel="noreferrer">Prod(icon)</a>
                        </li>
                        <li>
                          <a href="https://naver.com" target="_blank" rel="noreferrer">Test(icon)</a>
                        </li>
                        <li>
                          <a href="https://naver.com" target="_blank" rel="noreferrer">GIT(icon)</a>
                        </li>
                      </ul>
                    </li>
                    <li className="list-col3">
                      2023.09 ~ <br/>
                      2023.09
                    </li>
                    <li className="list-col4">
                      <ul className="main-career-desc-list">
                        <li>디자인, 퍼블리싱 100% 참여</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default App;
