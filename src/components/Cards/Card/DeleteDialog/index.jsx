import React, { memo, useRef, useCallback } from "react";

import {
    Scale,
    Button,
    IconButton,
    AlertDialog,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogCloseButton,
    useDisclosure,
} from "@chakra-ui/core";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { RemovedTournament } from "../../../../store/tournament";

const DeleteDialog = ({ id }) => {
    const btnRef = useRef();
    const cancelRef = useRef();
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleRemove = useCallback(() => {
        dispatch(RemovedTournament(id));
    }, [id, dispatch]);

    return (
        <>
            <IconButton
                top="10px"
                right="10px"
                icon="close"
                ref={btnRef}
                pos="absolute"
                onClick={onOpen}
                aria-label="Remove Item"
            />
            <Scale in={isOpen}>
                {(styles) => (
                    <AlertDialog
                        isOpen={true}
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        leastDestructiveRef={cancelRef}
                    >
                        <AlertDialogOverlay opacity={styles.opacity} />
                        <AlertDialogContent {...styles}>
                            <AlertDialogCloseButton />
                            <AlertDialogHeader>Delete item?</AlertDialogHeader>
                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    No
                                </Button>
                                <Button
                                    ml={3}
                                    variantColor="red"
                                    onClick={handleRemove}
                                >
                                    Yes
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </Scale>
        </>
    );
};

DeleteDialog.propTypes = {
    id: PropTypes.string.isRequired,
};

export default memo(DeleteDialog);
