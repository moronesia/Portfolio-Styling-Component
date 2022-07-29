// import React from "react";
import "./style.css";
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
class Bootstrap extends Component {

    render () {
        return(

            <React.Fragment>
           
            {/* navbar start */}

            <Navbar collapseOnSelect expand="lg fixed-top">
              <div className="container-fluid">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Others">Others</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Friends">Friends</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact Me</a>
                        </li>
                    </ul>
                </Navbar.Collapse>
              </div>
            </Navbar>

            {/* navbar End */}

            {/* Header Start */}

            <header className="jumbotron">
            <div className="container">
                <h1 className="display-4">I'm <span>Tunjung Anjasmoro</span></h1>
                <p className="satu">Saat ini saya bekerja sebagai SEO Staff sebagai Link Building Specialist <br />untuk berbagai perusahaan industri dalam upaya peningkatan pemasaran secara digital.</p>
                <button type="button" className="btn btn-primary">Hire me</button>
            </div>
            </header>

            {/* Header End */}

            {/* Skills Start */}

            <div>
                <h1 className="satu animate__animated animate__fadeInLeft Skills" id="Skills">My Basic Skills</h1>
                </div>

                <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeInLeft">
                    <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                        <h5 className="card-title">HTML</h5>
                        <p className="card-text">bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets dan bahasa scripting seperti JavaScript dan VBScript.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                        <h5 className="card-title">CSS</h5>
                        <p className="card-text">aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                        <h5 className="card-title">Bootstrap</h5>
                        <p className="card-text">kerangka kerja CSS yang sumber terbuka dan bebas untuk merancang situs web dan aplikasi web. Kerangka kerja ini berisi templat desain berbasis HTML dan CSS untuk tipografi, formulir, tombol, navigasi, dan komponen antarmuka lainnya, serta juga ekstensi opsional JavaScript.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* Skills End */}
            

            {/* Others Start */}

            <div>
                <h1 className="dua animate__animated animate__fadeInLeft Others" id="Others">My Other Skills</h1>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeInLeft">
                    <div className="col">
                        <div className="card h-100">
                        <div className="card-body">
                            <h5 className="judul">Graphic Design</h5>
                            <p className="text">proses komunikasi menggunakan elemen visual, seperti tipografi, fotografi, serta ilustrasi yang dimaksudkan untuk menciptakan persepsi akan suatu pesan yang disampaikan. Bidang ini melibatkan proses komunikasi visual dan desain komunikasi.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <div className="card-body">
                            <h5 className="judul">Content Writer</h5>
                            <p className="text">seorang penulis profesional yang memproduksi konten-konten menarik di media online. Konten yang mereka ciptakan bisa berbentuk artikel blog, post di sosial media, atau apa pun yang ditulis dalam platform online.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <div className="card-body">
                            <h5 className="judul">SEO</h5>
                            <p className="text">serangkaian proses yang dilakukan secara sistematis yang bertujuan untuk meningkatkan volume dan kualitas trafik kunjungan melalui mesin pencari menuju situs web tertentu dengan memanfaatkan mekanisme kerja atau algoritma mesin pencari tersebut.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Others End */}



            {/* Friends start */}
            <div>
                <h1 className="tiga animate__animated animate__fadeInLeft Friends" id="Friends">My Close Friends</h1>
            </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeInLeft">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                <h5 className="heading">Arya</h5>
                                <hr className="garis"/>
                                <p className="alamat">Yogyakarta</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                <h5 className="heading">Christ</h5>
                                <hr className="garis"/>
                                <p className="alamat">Yogyakarta</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                <h5 className="heading">Andre</h5>
                                <hr className="garis"/>
                                <p className="alamat">Jawa Tengah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Friends End */}


            {/* Contact Start */}
            <div className="bg">
                <div>
                <h1 className="empat animate__animated animate__fadeInLeft Contact" id="Contact">Contact Me</h1>
                </div>

                <form>
                    <div className="container">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="your name is...."/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your text..." rows="3"></textarea>
                        </div>

                        <div className="col-auto">
                            <button type="submit" className="btn tombol mb-3">Confirm identity</button>
                        </div>
                    </div>
                </form>
             </div>
            {/* Contact End */}

            </React.Fragment>
        )
    }
}

export default Bootstrap;