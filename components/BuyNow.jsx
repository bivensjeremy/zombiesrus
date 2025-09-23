'use client'

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Modal, ModalHeader, ModalContent, ModalBody, ModalFooter, useDisclosure,
} from "@heroui/modal";

export const BuyNow = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
    <>
    <Button 
        onPress={onOpen}
        color="primary"
        fullWidth
        className="font-semibold"
    >
            Buy Now
        </Button>

    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
        {(onClose) => (
            <>
            <ModalHeader className="flex flex-col gap-1">Buying A Zombie</ModalHeader>
            
            <ModalBody>
                <p>
                Silly goose, buying zombies would be legally and ethically wrong. Not to mention impossible since zombies do not actually exist. 
                </p>
                <p>
                You can, however, get a new website by Blueprint Web Dev. If you are ready to take your business to the next level, contact us today! You could be losing valuable clients because your landing page isn't landing any conversions!
                </p>
                <p>
                Click the button below to get in touch with us and discover what your business is lacking.
                </p>
            </ModalBody>
            
            <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                    Close
                </Button>

                <Button 
                    color="primary"
                    as={Link}
                    variant="flat"
                    isExternal={true}
                    href="https://bivensblueprintllc.hbportal.co/public/68c4169c4d8580002134164b"
                >
                    Contact Us
                </Button>
            </ModalFooter>
            </>
        )}
        </ModalContent>
    </Modal>
    </>
    );
}

export default BuyNow;