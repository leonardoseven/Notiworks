package br.com.notiworks.configs.filter;

import java.io.IOException;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import br.com.notiworks.configs.utils.JwtUtil;
import br.com.notiworks.services.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthFilter  extends OncePerRequestFilter{

	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final String authHeader = request.getHeader("Authorization");
		final String userEmail;
		final String jwtToken;
		
		if(authHeader == null || !authHeader.startsWith("Bearer")) {
			filterChain.doFilter(request, response);
			return;
		}
		jwtToken = authHeader.substring(7);
		userEmail = jwtUtil.extractUsername(jwtToken);
		if(userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails user = userService.loadUserByUsername(userEmail);
			
			if(jwtUtil.validateToken(jwtToken, user)) {
//				UsernamePasswordAuthenticationToken authToken = 
//						new UsernamePasswordAuthenticationToken(user, user.getAuthorities());
//				authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//				SecurityContextHolder.getContext().setAuthentication(authToken);
				
				GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_ADMIN");
		        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(user, jwtToken, Arrays.asList(authority));
		        SecurityContextHolder.getContext().setAuthentication(auth);
			}
		}
		
		filterChain.doFilter(request, response);
	}

}
