package au.edu.uq.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private DataSource dataSource;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth
//                .inMemoryAuthentication()
//                .withUser("chenxin")
//                .password("{noop}none")
//                .authorities("ROLE_USER")
//                .and()
//                .withUser("zhibin")
//                .password("{noop}woainvren1")
//                .authorities("ROLE_ADMIN");
        auth
                .jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery("select username,password, enabled from Users where username = ?")
                .authoritiesByUsernameQuery("select username, authority from UserAuthorities where username = ?")
                .passwordEncoder(NoOpPasswordEncoder.getInstance());

    }
}
