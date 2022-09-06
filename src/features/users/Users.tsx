import React, { useEffect, useCallback } from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

const Users = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const getUsers = useCallback(async () => {
    await dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (user.loading) return <h1>Loading</h1>;
  if (!user.loading && user.error) return <h1>Error loading users.</h1>;
  return (
    <TableContainer component={Paper}>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell align="right">Username</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {user.users.map((u) => (
          <TableRow
            key={u.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {u.id}
            </TableCell>
            <TableCell>{u.name}</TableCell>
            <TableCell align="right">{u.username}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
  // return (
  //   <>
  //     {user.users.map((u) => (
  //       <h3 key={u.id}>{u.name}</h3>
  //     ))}
  //   </>
  // );
};

export default Users;
