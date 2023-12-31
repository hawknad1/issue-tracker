import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewIssueLoading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="15rem" />
    </Box>
  );
};

export default NewIssueLoading;
