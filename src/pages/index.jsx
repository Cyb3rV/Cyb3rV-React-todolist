import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Container } from "react-bootstrap";
import { TodoList } from "@/components/TodoList";
import Link from "next/link";


export default function Home() {
  return (
      <TodoList/>
  );
}
