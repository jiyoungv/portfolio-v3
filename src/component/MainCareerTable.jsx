import parse from 'html-react-parser';
import { RiLink, RiFlaskFill, RiGithubFill } from 'react-icons/ri';
import { careerList } from 'util/data';
import { changeDateNotation } from 'util/func';

const MainCareerTable = () => {
  return (
    <>
      <div className="main-career-head">
        <div className="table-row">
          <div className="table-col">
            <article className="main-career-title">
              <p>career</p>
            </article>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col-12">
            <article className="main-career-head-col">
              <p>company</p>
            </article>
          </div>
          <div className="table-col-12">
            <article className="main-career-head-col">
              <p>project</p>
            </article>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col-4">
            <article className="main-career-head-col">
              <p>name</p>
            </article>
          </div>
          <div className="table-col-2">
            <article className="main-career-head-col">
              <p>period</p>
            </article>
          </div>
          <div className="table-col-6">
            <article className="main-career-head-col">
              <p>description</p>
            </article>
          </div>
          <div className="table-col-4">
            <article className="main-career-head-col">
              <p>device / name / link</p>
            </article>
          </div>
          <div className="table-col-2">
            <article className="main-career-head-col">
              <p>period</p>
            </article>
          </div>
          <div className="table-col-6">
            <article className="main-career-head-col">
              <p>description</p>
            </article>
          </div>
        </div>
      </div>
      <div className="main-career-body">
        {careerList.map((v, i) => (
          <div key={i} className="table-row">
            <div className="table-col-12">
              <div className="table-row depth2 height-full">
                <div className="table-col-8">
                  <article className="main-career-body-left main-career-company-info">
                    <p className="main-career-name">{parse(v.name)}</p>
                    {v.link && (
                      <a href={v.link} className="main-career-company-link" target="_blank" rel="noreferrer">
                        <RiLink />
                      </a>
                    )}
                  </article>
                </div>
                <div className="table-col-4">
                  <article className="main-career-body-left main-career-period">
                    <p>{changeDateNotation(v.startDate, '.')} ~ <br/>{changeDateNotation(v.endDate, '.')} <small>(약 2년 7개월)</small></p>
                  </article>
                </div>
                <div className="table-col-12">
                  <article className="main-career-body-left">
                    {v.description && (
                      <ul>
                        {v.description.map((v2, i2) => (
                          <li key={i2}>{v2}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                </div>
              </div>
            </div>
            <div className="table-col-12">
              {v.project.map((v2, i2) => (
                <div key={i2} className="table-row depth2">
                  <div className="table-col-8">
                    <article className="main-career-project-info">
                      {v2.device && (
                        <ul className="main-career-device-list">
                          {v2.device.map((v3, i3) => (
                            <li key={i3}>{v3}</li>
                          ))}
                        </ul>
                      )}
                      <p className="main-career-name">{v2.name}</p>
                      {v2.link && (
                        <ul className="main-career-link-list">
                          {v2.link.prod && (
                            <li>
                              <a href={v2.link.prod} target="_blank" rel="noreferrer">
                                <RiLink />
                              </a>
                            </li>
                          )}
                          {v2.link.test && (
                            <li>
                              <a href={v2.link.test} target="_blank" rel="noreferrer">
                                <RiFlaskFill />
                              </a>
                            </li>
                          )}
                          {v2.link.git && (
                            <li>
                              <a href={v2.link.git} target="_blank" rel="noreferrer">
                                <RiGithubFill />
                              </a>
                            </li>
                          )}
                        </ul>
                      )}
                    </article>
                  </div>
                  <div className="table-col-4">
                    <article className="main-career-period">
                      <p>{changeDateNotation(v2.startDate, '.')} ~ <br/>{changeDateNotation(v2.endDate, '.')} <small>(약 2년 7개월)</small></p>
                    </article>
                  </div>
                  <div className="table-col-12">
                    <article>
                      {v2.description && (
                        <ul>
                          {v2.description.map((v3, i3) => (
                            <li key={i3}>{v3}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCareerTable;