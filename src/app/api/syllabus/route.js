import { NextResponse, NextRequest } from "next/server";
import { syllabus } from "../../../../data/syllabus";

export async function GET(req) {
  return NextResponse.json(syllabus, {
    status: 200,
  });
}
