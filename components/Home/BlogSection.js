import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pokemon1 from '@/assets/images/Image01.png';
import pokemon2 from '@/assets/images/Image02.png';
import pokemon3 from '@/assets/images/Image03.png';
import pokemon4 from '@/assets/images/Image04.png';
import pokemon5 from '@/assets/images/Image05.png';

const BlogSection = ({ styles }) => {
    return (
        <Container className='mt-5'>
            <div className='text-center'>
                <h1 className={styles.blog_title}>Ash & Pikachu Arrive in <br /> Pokémon Universe</h1>
            </div>
            <Row sm={1} md={2} className='g-4'>
                <Col style={{ wordBreak: "break-all" }} className="d-none d-md-block">
                    <div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className='mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dolores voluptates deleniti natus ducimus tenetur distinctio consectetur, modi molestiae atque voluptatum numquam earum laborum necessitatibus et incidunt! Quo illo autem adipisci, aliquam incidunt animi numquam?</p>
                                <div className="d-flex justify-content-between ">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi optio itaque ex animi nostrum esse, quasi, temporibus libero, et enim expedita recusandae accusantium praesentium dolor sint praesentium dolor sint </p>
                                    <Image src={pokemon4} className="ms-2" width={170} height={170} alt="" />
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus error asperiores esse eveniet id laudantium culpa, aspernatur,</p>
                            </div>
                            <div className="ms-4">
                                <Image src={pokemon3} width={170} height={170} alt="" />
                                <Image src={pokemon2} className="mt-4" width={170} height={170} alt="" />
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ipsa nemo ut magnam suscipit enim consequatur odit deleniti eum inventore ullam? Nam autem quaerat magni nisi nesciunt vero in saepe voluptate. Obcaecati iusto natus tempore magnam accusamus delectus molestias saepe incidunt quae totam inventore deleniti libero enim numquam voluptatibus nulla, recusandae laudantium illum, sunt dolor nam voluptas consequatur. Placeat, sit recusandae ad corporis accusamus delectus eveniet ullam consequatur voluptatem expedita!</p>
                    </div>
                </Col>
                <Col style={{ wordBreak: "break-all" }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur numquam rem magni ipsa illum, labore expedita. Eligendi deserunt nulla, nihil suscipit ea id fugiat quidem! Eius provident ex doloremque, molestiae dolores, aperiam quo voluptatem, quas eveniet earum hic recusandae.</p>
                    <div className=' d-none d-md-block d-md-flex '>
                        <Image src={pokemon5} width={150} height={150} alt="" />
                        <p className='ps-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis labore porro reprehenderit, expedita necessitatibus doloremque amet, dolorem, debitis quod nihil suscipit esse. Natus quae, est dolorum nihil saepe voluptatibus? Modi est minima ducimus dolorum sit consequuntur molestias. Nostrum veniam, ea voluptate suscipit optio culpa!
                        </p>
                    </div>
                    <div className="ms-4 d-flex d-block d-md-none justify-content-center align-items-center">
                        <div className=''>
                            <Image src={pokemon4} className="me-2" width={120} height={120} alt="" />
                        </div>
                        <div className='d-flex flex-column me-2'>
                            <Image src={pokemon3} width={120} height={120} alt="" />
                            <Image src={pokemon2} className="mt-2" width={120} height={120} alt="" />
                        </div>
                        <div className='d-flex flex-column mt-5 pt-5'>
                            <Image src={pokemon5} width={120} height={120} alt="" />
                            <Image src={pokemon1} className="mt-2" width={120} height={120} alt="" />
                        </div>
                    </div>
                    <div className='d-none d-md-block d-md-flex mt-2 '>
                        <Image src={pokemon1} width={150} height={150} alt="" />
                        <p className='ps-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis labore porro reprehenderit, expedita necessitatibus doloremque amet, dolorem, debitis quod nihil suscipit esse. Natus quae, est dolorum nihil saepe voluptatibus? Modi est minima ducimus dolorum sit consequuntur molestias. Nostrum veniam, ea voluptate suscipit optio culpa!
                        </p>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas omnis temporibus quae explicabo, eligendi accusamus iste ut inventore neque exercitationem vel nam ipsum dolores corporis. Commodi debitis voluptas, molestiae atque magnam repudiandae at sequi ipsa. Nemo ducimus, ad voluptas excepturi pariatur, nostrum ?</p>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogSection;