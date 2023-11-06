import { Button, Flex, HStack, Icon, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import {
    AiFillPlusCircle,
    AiFillMinusCircle,
} from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const PriceSection = () => {
    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

    return (
        <CustomCard>
            <Flex justifyContent="space-between" align="start">
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Current Price</Text>
                    </HStack>
                    <HStack
                        spacing={2}
                        align={{
                            base: "flex-start",
                            sm: "center",
                        }}
                        flexDir={{
                            base: "column",
                            sm: "row",
                        }}
                    >
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">
                                ₹26,670.25
                            </Text>{" "}
                            <HStack fontWeight="medium" color="green.500">
                                <Icon as={BsArrowUpRight} />
                                <Text fontSize="sm" fontWeight="medium">
                                    0.04%
                                </Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </Stack>
                <HStack>
                    <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
                    <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
                </HStack>
            </Flex>

            <Tabs variant='soft-rounded' >
                <Flex justify="end" p="3px" >
                    <TabList bg="black.5" p="3px">
                        {["1H", "1D", "1W", "1M"].map((tab) => (
                            <Tab
                                _selected={{ bg: "white" }}
                                key={tab}
                                fontSize="sm"
                                p="6px"
                                borderRadius="4"
                            >
                                {tab}
                            </Tab>
                        ))}
                    </TabList>
                </Flex>

                <TabPanels>
                    <TabPanel>
                        <Image w="100%" src="/graph.svg" mt="3rem" />
                        <HStack justify="space-between">
                            {
                                timestamps.map((timestamp) => (
                                    <Text key={timestamp} fontSize="sm" color="black.80">
                                        {timestamp}
                                    </Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>


        </CustomCard>
    )
}

export default PriceSection