import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pencil2Icon } from "@radix-ui/react-icons";

interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="4" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card mt="4">
          <p>{issue.description}</p>
        </Card>
      </Box>
      <Box>
        <Button className="space-x-2">
          <Pencil2Icon />
          <Link href={`/issue/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
