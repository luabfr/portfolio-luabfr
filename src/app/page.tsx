"use client"
import Link from 'next/link'
import Layout from "antd/es/layout"
import { Space, Typography, Button, Flex, Input, Image, Pagination, Card, FloatButton, Spin, Breadcrumb, Radio, Select } from 'antd';
const { Text, Title } = Typography

export default function Home() {
  return (
    <Layout style={{minHeight:"100vh", justifyContent:"center", alignItems:"center"}}>
      <Layout style={{width: "1200px", background:"white", padding: "4rem"}}>
        <Flex vertical>
          <Title>
            luabfr@Portfolio
          </Title>

          <Flex>
            <Link href="/meli-test">Meli Test</Link>
          </Flex>

        </Flex>








        {/*  LINKS NEXT  */}
        {/*  LINKS NEXT  */}
        {/*  LINKS NEXT  */}
        <Flex >
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Title level={5}>
              Docs <span>-&gt;</span>
            </Title >
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Title level={5}>
              Learn <span>-&gt;</span>
            </Title>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Title level={5}>
              Templates <span>-&gt;</span>
            </Title>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Title level={5}>
              Deploy <span>-&gt;</span>
            </Title>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </Flex>
      </Layout>
    </Layout>
  )
}
