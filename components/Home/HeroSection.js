import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
SwiperCore.use([Pagination, Navigation]);
import pokemonLogo from "@/assets/images/Logo.png"
import Link from 'next/link';
import { getPokemons } from 'Hooks/getPokemons';

const HeroSection = ({ styles }) => {
    const { pokemons } = getPokemons();
    const neature = (name) => {
        switch (name) {
            case "bulbasaur":
            case "ivysaur":
            case "venusaur": {
                return [{ color: "#69ad69", name: "Grass" }, { color: "#cf70cf", name: "Poison" }];
            }
            case "charmander":
            case "charmeleon": {
                return [{ color: "#ff9c10", name: "Fire" }];
            }
            case ("caterpie"): {
                return [{ color: "#69ad69", name: "Bug" }];
            }
            case ("charizard"): {
                return [{ color: "#ff9c10", name: "Fire" }, { color: "blue", name: "Flying" }]
            }
            default:
                return [{ color: "#3fafd3", name: "Water" }]
        }
    }
    return (
        <div className={styles.hero_section}>
            <div className={styles.hero_bg}>
                <Container>
                    <div className='py-5 text-center'>
                        <Image
                            src={pokemonLogo}
                            width={300}
                            alt='pokemon logo'
                        />
                        {pokemons.length === 0 && <Spinner animation="grow" variant="warning" className='d-block mt-3 mx-auto' />}
                    </div>
                    <Row lg={5} md={2} sm={1} className='g-5 mt-4 pb-5'>
                        {/* mobile view  */}
                        <div className="d-block d-md-none">
                            <Swiper slidesPerView={2} spaceBetween={30} slidesPerGroup={1} loopFillGroupWithBlank={true} navigation={true} className="mySwiper">
                                {
                                    pokemons.map((ele, i) => <SwiperSlide className='mb-16' key={i}>
                                        <Link href={`/pokemon/${ele.name}`}>
                                            <div className={`${styles.pokemon_card} pb-5`}>
                                                <div className={styles.image_container}>
                                                    <div className='tag'>#010</div>
                                                    <Image
                                                        src={ele.artwork}
                                                        width={140} alt=''
                                                        height={140}
                                                    />
                                                </div>
                                                <p className='text-capitalize mt-3'>{ele.name}</p>
                                                {neature(ele.name)?.map((c, i) =>
                                                    <span
                                                        key={i}
                                                        style={{ background: c.name === "Flying" ? 'linear-gradient(#24caff 50%, #b3abab 50%)' : c.color }}
                                                        className={styles.neature}
                                                    >
                                                        {c.name}
                                                    </span>
                                                )}
                                            </div>
                                        </Link>
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                        {/* web view  */}
                        {
                            pokemons?.map(ele => <Col key={ele.id} className="d-md-block d-none">
                                <Link href={`/pokemon/${ele.name}`}>
                                    <div className={styles.pokemon_card}>
                                        <div className={styles.image_container}>
                                            <div className='tag'>#010</div>
                                            <Image
                                                src={ele.artwork}
                                                width={170} alt=''
                                                height={170}
                                            />
                                        </div>
                                        <p className='text-capitalize mt-3'>{ele.name}</p>
                                        {neature(ele.name)?.map((c, i) =>
                                            <span
                                                key={i}
                                                style={{ background: c.name === "Flying" ? 'linear-gradient(#24caff 50%, #b3abab 50%)' : c.color }}
                                                className={styles.neature}
                                            >
                                                {c.name}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </Col>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HeroSection;