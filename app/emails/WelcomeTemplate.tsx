import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Font,
  Section,
  Text,
  Tailwind,
  Link,
  Row,
  Column,
} from "@react-email/components";

export const WelcomeEmail = () => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Font fontFamily="Inter" fallbackFontFamily="Verdana" />
        <Preview>Master your next skills</Preview>
        <Body style={main}>
          <Container>
            <Img
              src="https://sandbox.udao.org/images/udao-logo.png"
              width="170"
              height="50"
              alt="udao"
              className="object-contain w-full mx-auto mt-10"
            />
            <Text className=" my-10 font-bold text-5xl font-serif">
              Master your next skills
            </Text>
            <Text className="my-4 text-[20px] font-thin">
              Join the future of education today with Udao's Web 3.0 community.
              Take the lead in revolutionizing the skill-based economy and
              shaping how we learn, teach, and recruit talent. Don't wait – join
              us now and be part of the community.
            </Text>
            <Section className="flex justify-center items-center">
              <Button
                className="my-6 bg-[#D84B29] px-8 py-4 rounded-full text-white items-start hover:bg-[#C24425]"
                href="https://sandbox.udao.org/"
              >
                Visit Course Marketplace
              </Button>
            </Section>
            <Text className="mb-5 text-[20px] font-thin">
              Best,
              <br />
              The UDAO team
            </Text>

            <Hr />

            <Container className="w-[600px] h-[500px]">
              <Img
                src="https://sandbox.udao.org/_next/image?url=%2Fimages%2Flanding-page-hero.png&w=1080&q=75"
                alt="Landing page hero"
                width={533}
                height={490}
              />
            </Container>

            {/* FOOTER */}
            <Text className="my-12">
              At Udao we revolutionize the Skills Economy for people and
              organizations. Our decentralized Web 3.0 platform enables members
              to control their skills development, connect and collaborate in a
              transparent and fair environment.
            </Text>

            <Row>
              <Section className="border-solid border-t border-slate-300 py-4">
                <Text className="text-center text-nowrap">
                  <Link className="text-sm text-[#0366d6] text-nowrap">
                    Home
                  </Link>{" "}
                  ・{" "}
                  <Link className="text-sm text-[#0366d6] text-nowrap">
                    Marketplace
                  </Link>{" "}
                  ・{" "}
                  <Link className="text-sm text-[#0366d6] text-nowrap">
                    Terms
                  </Link>{" "}
                  ・{" "}
                  <Link className="text-sm text-[#0366d6] text-nowrap">
                    About us
                  </Link>{" "}
                  ・{" "}
                  <Link className="text-sm text-[#0366d6] text-nowrap">
                    Our Team
                  </Link>{" "}
                  ・{" "}
                  <Link className="text-sm text-[#0366d6] text-nowrap">
                    UDAO Token
                  </Link>{" "}
                  ・{" "}
                  <Link className="text-sm text-[#0366d6] text-nowrap">
                    Privacy Policy
                  </Link>{" "}
                  ・{" "}
                  <Link className="text-sm text-[#0366d6] text-nowrap">
                    Impressum
                  </Link>
                </Text>
              </Section>

              <Section className="border-solid border-t border-slate-300">
                <Text className="text-center">
                  <Link className="text-sm text-slate-400">X (Twitter)</Link> ・{" "}
                  <Link className="text-sm text-slate-400">Linkedin</Link> ・{" "}
                  <Link className="text-sm text-slate-400">Telegram</Link> ・{" "}
                  <Link className="text-sm text-slate-400">Discord</Link> ・{" "}
                  <Link className="text-sm text-slate-400">Facebook</Link> ・{" "}
                  <Link className="text-sm text-slate-400">Youtube</Link> ・{" "}
                  <Link className="text-sm text-slate-400">Medium</Link>
                </Text>
              </Section>

              <Section className="border-solid border-t border-slate-300 py-2">
                <Text className="text-sm text-center text-slate-400">
                  Zug, Switzerland. Hinterbergstrasse 20 6312, Steinhausen ZG
                  <br />
                  <Link
                    href="mailto:contact@udao.org"
                    className="text-slate-400 text-sm"
                  >
                    contact@udao.org
                  </Link>
                </Text>
              </Section>
            </Row>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,Quicksand,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

{
  /* <Column className=" items-stretch flex flex-col" align="left">
<Text className="mb-1 text-lg font-bold">Browse</Text>

<Row>
  <Link
    href="https://sandbox.udao.org/"
    className="text-black font-thin"
  >
    Home
  </Link>
</Row>
<Row>
  {" "}
  <Link
    href="https://sandbox.udao.org/marketplace"
    className="text-black font-thin"
  >
    Marketplace
  </Link>
</Row>
<Row>
  {" "}
  <Link
    href="https://sandbox.udao.org/terms"
    className="text-black font-thin"
  >
    Terms
  </Link>
</Row>
</Column>

<Column>
<Text className="mb-1 text-lg font-bold">Information</Text>

<Row>
  <Link
    href="https://udao.org/about-us/"
    className="text-black font-thin"
    target="_blank"
  >
    About us
  </Link>
</Row>

<Row>
  <Link
    href="https://udao.org/team/"
    className="text-black font-thin"
    target="_blank"
  >
    Our Team
  </Link>
</Row>

<Row>
  <Link
    href="https://udao.org/token/"
    className="text-black font-thin"
    target="_blank"
  >
    UDAO Token
  </Link>
</Row>

<Row>
  <Link
    href="https://udao.org/privacy-policy/"
    className="text-black font-thin"
    target="_blank"
  >
    Privacy Policy
  </Link>
</Row>

<Row>
  <Link
    href="https://udao.org/impressum/"
    className="text-black font-thin"
    target="_blank"
  >
    Impressum
  </Link>
</Row>
</Column>

<Column>
<Text className="mb-1 text-lg font-bold">Social Media</Text>

<Row>
  <Link
    href="https://twitter.com/udao_official"
    target="_blank"
    className="text-black font-thin"
  >
    X (twitter)
  </Link>
</Row>

<Row>
  <Link
    href="https://www.linkedin.com/showcase/udao-official/?viewAsMember=true"
    target="_blank"
    className="text-black font-thin"
  >
    Linkedn
  </Link>
</Row>

<Row>
  <Link
    href="https://t.me/udao_official"
    target="_blank"
    className="text-black font-thin"
  >
    Telegram
  </Link>
</Row>

<Row>
  <Link
    href="https://discord.gg/BhHZSJbgCm"
    target="_blank"
    className="text-black font-thin"
  >
    Discord
  </Link>
</Row>

<Row>
  <Link
    href="https://www.facebook.com/profile.php?id=100093967771283"
    className="text-black font-thin"
    target="_blank"
  >
    Facebook
  </Link>
</Row>

<Row>
  <Link
    href="https://youtube.com/@udao_official?feature=shared"
    className="text-black font-thin"
    target="_blank"
  >
    Youtube
  </Link>
</Row>

<Row>
  <Link
    href="https://medium.com/@udao_official"
    className="text-black font-thin"
    target="_blank"
  >
    Medium
  </Link>
</Row>
</Column> */
}
