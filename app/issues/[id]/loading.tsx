import IssueStatusBadge from "@/components/IssueStatusBadge";
import { Heading, Flex, Card, Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailLoading = async () => {
  return (
    <Box className="max-w-2xl">
      <Skeleton />
      <Flex gap="4" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueDetailLoading;
