import React, { useEffect, useState } from "react";
import { Card, Tab, Nav, ListGroup } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const Rightside = () => {
  const switcherOpen = () => {
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
  };

  let { basePath } = useRouter();

  let [url, seturl] = useState("");

  useEffect(() => {
    if (window != undefined) {
      seturl(window.location.origin);
    }
  });

  return (
    <div>
      {/* <!-- Sidebar-right --> */}
      <div className="sidebar sidebar-right sidebar-animate">
        <Card className="panel panel-primary mb-0 shadow-none border-0">
          <div className="tab-menu-heading border-0 d-flex p-3">
            <Card.Title className="mb-0">
              <i className="fe fe-bell me-2"></i>
              <span className="pulse"></span>Notifications
            </Card.Title>
            <div
              className="card-options ms-auto"
              onClick={() => switcherOpen()}
            >
              <Link
                href="#"
                className="sidebar-icon text-end float-end me-3 mb-1"
                data-bs-toggle="sidebar-right"
                data-target=".sidebar-right"
              >
                <i className="fe fe-x text-white"></i>
              </Link>
            </div>
          </div>
          <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
            <div className="tabs-menu">
              {/* <!-- Tabs --> */}
              <Tab.Container defaultActiveKey="Feeds">
                <Nav variant="pills" className="">
                  <Nav.Item>
                    <Nav.Link eventKey="Feeds">
                      <i className="fe fe-settings me-1 d-inline-block"></i>
                      Feeds
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Chat">
                      <i className="fe fe-message-circle me-1 d-inline-block"></i>{" "}
                      Chat
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="Feeds">
                    <div className="tab-pane active" id="side1">
                      <div className="p-3 fw-semibold ps-5">Feeds</div>
                      <div className="card-body pt-2">
                        <div className="browser-stats">
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle brround bg-primary-transparent">
                                <i className="fe fe-user text-primary"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">New user registered</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fe fe-x"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent">
                                <i className="fe fe-shopping-cart text-secondary"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">New order delivered</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fe fe-x"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent">
                                <i className="fe fe-bell text-danger"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">You have pending tasks</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fe fe-x"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent">
                                <i className="fe fe-gitlab text-warning"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">New version arrived</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fe fe-x"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent">
                                <i className="fe fe-database text-pink"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">Server #1 overloaded</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fe fe-x"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-info brround bg-info-transparent">
                                <i className="fe fe-check-circle text-info"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">New project launched</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                  <Link href="#">
                                    <i className="fe fe-x"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 fw-semibold ps-5">Settings</div>
                      <div className="card-body pt-2">
                        <div className="browser-stats">
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle brround bg-primary-transparent">
                                <i className="fe fe-settings text-primary"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">General Settings</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent">
                                <i className="fe fe-map-pin text-secondary"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">Map Settings</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent">
                                <i className="fe fe-headphones text-danger"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">Support Settings</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent">
                                <i className="fe fe-credit-card text-warning"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">Payment Settings</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-sm-2 mb-sm-0 mb-3">
                              <span className="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent">
                                <i className="fe fe-bell text-pink"></i>
                              </span>
                            </div>
                            <div className="col-sm-10 ps-sm-0">
                              <div className="d-flex align-items-end justify-content-between ms-2">
                                <h6 className="">Notification Settings</h6>
                                <div>
                                  <Link href="#">
                                    <i className="fe fe-settings me-1"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>

                  {/* Chat Notifications */}
                  <Tab.Pane eventKey="Chat">
                    <div className="tab-pane" id="side2">
                      <ListGroup className="list-group-flush">
                        <div className="pt-3 fw-semibold ps-5">Today</div>
                        <ListGroup.Item className="d-flex align-items-center">
                          <div className="me-2">
                            <img
                              className="avatar avatar-md brround cover-image"
                              alt="user-2"
                              src={`${
                                process.env.NODE_ENV === "production"
                                  ? basePath
                                  : ""
                              }/assets/images/users/2.jpg`}
                            />
                          </div>
                          <div className="">
                            <Link href={`/components/chat`}>
                              <div
                                className="fw-semibold text-dark"
                                data-bs-toggle="modal"
                                data-target="#chatmodel"
                              >
                                Addie Minstra
                              </div>
                              <p className="mb-0 fs-12 text-muted">
                                {" "}
                                Hey! there{` I'`} am available....{" "}
                              </p>
                            </Link>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                          <div className="me-2">
                            <img
                              className="avatar avatar-md brround cover-image"
                              alt="user-11"
                              src={`${
                                process.env.NODE_ENV === "production"
                                  ? basePath
                                  : ""
                              }/assets/images/users/11.jpg`}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div className="">
                            <Link href={`/components/chat`}>
                              <div
                                className="fw-semibold text-dark"
                                data-bs-toggle="modal"
                                data-target="#chatmodel"
                              >
                                Rose Bush
                              </div>
                              <p className="mb-0 fs-12 text-muted">
                                {" "}
                                Okay...I will be waiting for you{" "}
                              </p>
                            </Link>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                          <div className="me-2">
                            <img
                              className="avatar avatar-md brround cover-image"
                              alt="user-10"
                              src={`${
                                process.env.NODE_ENV === "production"
                                  ? basePath
                                  : ""
                              }/assets/images/users/10.jpg`}
                            />
                          </div>
                          <div className="">
                            <Link href={`/components/chat`}>
                              <div
                                className="fw-semibold text-dark"
                                data-bs-toggle="modal"
                                data-target="#chatmodel"
                              >
                                Claude Strophobia
                              </div>
                              <p className="mb-0 fs-12 text-muted">
                                {" "}
                                Hi we can explain our new project......
                              </p>
                            </Link>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                          <div className="me-2">
                            <img
                              className="avatar avatar-md brround cover-image"
                              alt="user-13"
                              src={`${
                                process.env.NODE_ENV === "production"
                                  ? basePath
                                  : ""
                              }/assets/images/users/13.jpg`}
                            />
                          </div>
                          <div className="">
                            <Link href={`/components/chat`}>
                              <div
                                className="fw-semibold text-dark"
                                data-bs-toggle="modal"
                                data-target="#chatmodel"
                              >
                                Eileen Dover
                              </div>
                              <p className="mb-0 fs-12 text-muted">
                                {" "}
                                New product Launching...{" "}
                              </p>
                            </Link>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                          <div className="me-2">
                            <img
                              className="avatar avatar-md brround cover-image"
                              alt="user-12"
                              src={`${
                                process.env.NODE_ENV === "production"
                                  ? basePath
                                  : ""
                              }/assets/images/users/12.jpg`}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div className="">
                            <Link href={`/components/chat`}>
                              <div
                                className="fw-semibold text-dark"
                                data-bs-toggle="modal"
                                data-target="#chatmodel"
                              >
                                Willie Findit
                              </div>
                              <p className="mb-0 fs-12 text-muted">
                                {" "}
                                Okay...I will be waiting for you{" "}
                              </p>
                            </Link>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center">
                          <div className="me-2">
                            <img
                              className="avatar avatar-md brround cover-image"
                              alt="user-15"
                              src={`${
                                process.env.NODE_ENV === "production"
                                  ? basePath
                                  : ""
                              }/assets/images/users/15.jpg`}
                            />
                          </div>
                          <div className="">
                            <Link href={`/components/chat`}>
                              <div
                                className="fw-semibold text-dark"
                                data-bs-toggle="modal"
                                data-target="#chatmodel"
                              >
                                Manny Jah
                              </div>
                              <p className="mb-0 fs-12 text-muted">
                                {" "}
                                Hi we can explain our new project......
                              </p>
                            </Link>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Card>
      </div>
      {/* <!--/Sidebar-right--> */}
    </div>
  );
};

export default Rightside;
