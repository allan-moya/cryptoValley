import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;

function Homepage() {
    const { data, isFetching } = useGetCryptosQuery()
    const globalStats = data?.data?.stats;

    if (isFetching) return 'Loading...';

    return (
        <>

            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span="12" ><Statistic title="Total Cryptocurrencies" value={globalStats?.total}></Statistic></Col>
                <Col span="12" ><Statistic title="Total Exchanges" value={globalStats}></Statistic></Col>
                <Col span="12" ><Statistic title="Total Market Cap" value={globalStats}></Statistic></Col>
                <Col span="12" ><Statistic title="Total 24hr Volume" value={globalStats}></Statistic></Col>
                <Col span="12" ><Statistic title="Total Markets" value={globalStats}></Statistic></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title"> Top 10 Cryptocurrencies</Title>
                <Title level={3} className="show-more"><Link to="cryptocurrencies">Show More</Link></Title>
            </div>
            {/* <Cryptocurrencies simplified /> */}
            <div className="home-heading-container">
                <Title level={2} className="home-title">Lates Crypto News</Title>
                <Title level={3} className="show-more"><Link to="cryptocurrencies">Show More</Link></Title>
            </div>
            {/* <News simplified /> */}

        </>
    )
}

export default Homepage
