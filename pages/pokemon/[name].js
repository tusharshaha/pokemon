import Image from 'next/image';
import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import pokemonLogo from "@/assets/images/Logo.png";
import { useRouter } from 'next/router';
import request from 'graphql-request';
import { GRAPHQL_URL } from 'utils/base_url';
import { single_pokemon } from 'graphql/query';
import styles from "@/styles/Charectar.module.css";
import { AiTwotoneHome } from "react-icons/ai";
import { getPokemons } from 'Hooks/getPokemons';

const Charectar = ({ pokemon }) => {
    const route = useRouter();
    const { pokemons } = getPokemons();
    const dPokemon = pokemons.find((ele) => ele.name === pokemon.name);
    const neature = (name) => {
        switch (name) {
            case "grass": return "#69ad69"
            case "poison": case "psychic": return "#cf70cf"
            case "fire": return "#ff9c10"
            case "bug": return "#69ad69"
            case "flying": return 'linear-gradient(#24caff 50%, #b3abab 50%)'
            default: return "#3fafd3"
        }
    }
    const weakness = ["fire", "psychic", "flying", "ice"];
    return (
        <Container>
            <div className='py-5 text-center'>
                <Image
                    src={pokemonLogo}
                    width={300}
                    alt='pokemon logo'
                />
            </div>
            <Row sm={1} lg={3}>
                <Col className="d-block d-md-none">
                    <div className={`${styles.mb_img}`}>
                        <Image src={dPokemon?.artwork} height={300} width={300} alt="" />
                    </div>
                </Col>
                <Col>
                    <h1 className={styles.pokemon_name}>{pokemon.name} #00{pokemon.id}</h1>
                    <p className='fs-5'>There is a plant seed on its black right from the day this pokemon is born. The seed slowly grows larger</p>

                    <div className={styles.pokemon_card}>
                        <Row xs={2} className="g-5">
                            <Col>
                                <p className='fw-bold mb-2 fs-5'>Height</p>
                                <p>{pokemon.height}'</p>
                            </Col>
                            <Col>
                                <p className='fw-bold mb-2 fs-5'>Category</p>
                                <p>Seed</p>
                            </Col>
                            <Col>
                                <p className='fw-bold mb-2 fs-5'>Weight</p>
                                <p>{pokemon.weight} lbs</p>
                            </Col>
                            <Col>
                                <p className='fw-bold mb-2 fs-5'>Abilities</p>
                                <ul>
                                    {pokemon.abilities.map((ele, i) => <li key={i} className="text-capitalize">{ele.ability.name}</li>)}
                                </ul>
                            </Col>
                        </Row>
                    </div>

                </Col>
                <Col className='d-none d-md-block'>
                    <div className={styles.wb_img}>
                        <Image src={dPokemon?.artwork} height={370} width={370} alt="" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h4 className='mb-4'>Type</h4>

                        {
                            pokemon.types.map((ele, i) => <span
                                key={i}
                                className={styles.neature}
                                style={{ background: neature(ele.type.name) }}
                            >
                                {ele.type.name.charAt(0).toUpperCase() + ele.type.name.slice(1)}
                            </span>)
                        }
                    </div>
                    <div>
                        <h4 className='my-4'>Weakness</h4>

                        {
                            weakness.map((ele, i) => <span
                                key={i}
                                className={styles.neature}
                                style={{ background: neature(ele) }}
                            >
                                {ele.charAt(0).toUpperCase() + ele.slice(1)}
                            </span>)
                        }
                    </div>
                    <div>
                        <h4 className='my-4'>Stats</h4>

                        {
                            pokemon.stats.map((ele, i) => <div key={i}>
                                <p className='fs-5 mb-1 text-capitalize'>{ele.stat.name}</p>
                                <ProgressBar style={{ height: "10px" }} variant="info" now={ele.base_stat} className="mb-2" />
                            </div>)
                        }
                    </div>
                </Col>
            </Row>
            <div className='mt-5'>
                <button className={styles.back_btn} onClick={() => route.push("/")}>
                    <AiTwotoneHome />
                    Back to Homepage
                </button>
            </div>
        </Container>
    );
};

export default Charectar;

export async function getServerSideProps(context) {
    const name = context.params.name;
    const res = await request(GRAPHQL_URL, single_pokemon, { name });
    const pokemon = await res.pokemon;
    return {
        props: { pokemon }
    }
}