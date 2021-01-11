import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {} from "firebase";
import { AuthenticateDto } from "./dto/authenticate.dto";

@Injectable()
export class AuthService {
	constructor(private readonly jwtService: JwtService) {}

	authenticate({ tel }: AuthenticateDto) {
		// Get user's phone number
		// Send verification code via sms
	}

	verify({ tel, code }) {
		// Verify user's phone number via specified code
		// If verified, create user account if it's not
		// redirect user to edit profile page to complete it's profile
	}
}
