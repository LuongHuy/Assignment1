import { useState } from "react";

import { TextInput, Box, Flex, Button, Select, Text } from "@mantine/core";

const InfomationCheck = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  const regions = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  const hasError =
    !name ||
    !emailRegex.test(email) ||
    !phoneNumber ||
    !address ||
    !city ||
    !region;

  return (
    <Box>
      <Text>Fill the correct information in the boxes</Text>
      <Flex direction="column" my="lg">
        <TextInput
          required
          label="Name"
          type="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <TextInput
          required
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />

        <TextInput
          required
          label="Phone Number"
          type="number"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.currentTarget.value)}
        />

        <TextInput
          label="Address"
          placeholder="Enter your address"
          value={address}
          onChange={(event) => setAddress(event.currentTarget.value)}
        />

        <TextInput
          label="City"
          placeholder="Enter your city"
          value={city}
          onChange={(event) => setCity(event.currentTarget.value)}
        />

        <Select
          label="Region"
          placeholder="Select your region"
          value={region}
          onChange={(_value, option) => setRegion(_value)}
          data={regions.map((region) => ({ value: region, label: region }))}
          mr={2}
        />
      </Flex>
      <Button my="lg" disabled={hasError} onClick={onSubmit}>
        Place an Order
      </Button>
    </Box>
  );
};

export default InfomationCheck;
